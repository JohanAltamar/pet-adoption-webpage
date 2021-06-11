import { toast } from "react-toastify";
import postFetch from "./postFetch";
import client from "../../apollo-client";
import { gql } from "@apollo/client";
import translations from "../i18n";

// =============================================================================
// PASSWORD RESET
// =============================================================================
export const resetPassword = async body => {
  const { code, password, passwordConfirmation } = body;

  const { data, errors } = await resetPasswordMutation({
    code,
    password,
    passwordConfirmation,
  });

  // If error found, throw a new Error
  if (errors) {
    const error = errors[0];
    const { message } = error.extensions.exception.data.data[0].messages[0];
    throw new Error(translations[message]);
  } else {
    toast.success("Contraseña actualizada correctamente. Inicia sesión.");
  }

  return data?.resetPassword?.user?.email;
};

// =============================================================================
// PASSWORD RECOVERY
// =============================================================================
export const passwordRecovery = async (ev, email) => {
  ev.preventDefault();

  const res = await postFetch(`${process.env.API_URL}/auth/forgot-password`, {
    email
  });

  const { ok, error, message } = res;
  
  if (ok) {
    toast.success("Verifica tu bandeja de correo electrónico");
  } else if (error) {
    throw new Error(translations[message[0].messages[0].message])
  }

  return res;
};

// =============================================================================
// GRAPHQL QUERIES
// =============================================================================
const resetPasswordMutation = async ({
  code,
  password,
  passwordConfirmation,
}) => {
  const { data, errors } = await client.mutate({
    mutation: gql`
      mutation (
        $code: String!
        $password: String!
        $passwordConfirmation: String!
      ) {
        resetPassword(
          code: $code
          password: $password
          passwordConfirmation: $passwordConfirmation
        ) {
          user {
            email
          }
        }
      }
    `,
    variables: { code, password, passwordConfirmation },
    errorPolicy: "all",
  });
  return { data, errors };
};
