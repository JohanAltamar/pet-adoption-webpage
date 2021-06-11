import NextAuth from "next-auth";
import Providers from "next-auth/providers";
import { gql } from "@apollo/client";
import client from "../../../apollo-client";

const options = {
  providers: [
    Providers.Credentials({
      name: "Credentials",
      credentials: {
        identifier: {
          label: "Email",
          type: "email",
          placeholder: "jsmith@gmail.com",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        const { data, errors } = await client.mutate({
          mutation: gql`
            mutation ($email: String!, $password: String!) {
              login(input: { identifier: $email, password: $password }) {
                jwt
                user {
                  username
                  email
                  id
                }
              }
            }
          `,
          variables: {
            email: credentials.identifier,
            password: credentials.password,
          },
          errorPolicy: "all",
        });

        const user = { ...data?.login.user, jwt: data?.login.jwt };

        if (user.jwt) {
          return user;
        } else {
          const error = errors[0];
          const { message } =
            error.extensions.exception.data.data[0].messages[0];
          throw new Error(message);
        }
      },
    }),
  ],
  session: {
    jwt: true,
  },
  callbacks: {
    jwt: async (token, user, account) => {
      const isSignIn = user ? true : false;

      if (isSignIn) {
        token.accessToken = user.jwt;
        token.id = user.id;
        token.name = user.username;
      }
      return Promise.resolve(token);
    },
    async session(session, user) {
      session.accessToken = user.accessToken;
      return session;
    },
  },
};

const Auth = (req, res) => NextAuth(req, res, options);

export default Auth;
