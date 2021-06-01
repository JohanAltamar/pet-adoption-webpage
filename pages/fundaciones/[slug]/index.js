import useSWR from "swr";
import { gql } from "@apollo/client";
import client from "../../../apollo-client";
import FoundationContainer from "../../../components/foundationPageComponents/Container";
import SEO from "../../../components/SEO";

const fetcher = (...args) => fetch(...args).then(res => res.json());
const fetchString = `
${process.env.API_URL}/pets/count?foundation.slug=`;

const FoundationPage = ({ info }) => {
  const { data: qty } = useSWR(fetchString + info.slug, fetcher, {
    initialData: info.qty,
  });

  return (
    <>
      <SEO title={info.name} description={info.description} />
      <FoundationContainer info={{ ...info, qty }} />
    </>
  );
};

export default FoundationPage;

export async function getStaticPaths() {
  const { data } = await client.query({
    query: gql`
      query Foundations {
        foundations {
          slug
        }
      }
    `,
  });

  const paths = data.foundations.map(foundation => ({
    params: { slug: foundation.slug },
  }));

  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const { data } = await client.query({
    query: gql`
      query Foundations($slug: String!) {
        foundations(where: { slug: $slug }) {
          id
          description
          form
          imageUrl
          name
          slug
          pets(sort: "createdAt:desc", limit: 9) {
            name
            imageUrl
            slug
            foundation {
              slug
            }
          }
        }
      }
    `,
    variables: { slug: params.slug },
  });

  const qty = await fetcher(fetchString + params.slug);

  return {
    props: {
      info: { ...data.foundations[0], qty },
    },
    revalidate: 1,
  };
}
