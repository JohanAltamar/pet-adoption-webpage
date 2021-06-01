import { gql } from "@apollo/client";
import client from "../../../apollo-client";
import Container from "../../../components/petPageComponents/Container";
import SEO from "../../../components/SEO";

const FoundationPetPage = ({ info }) => {
  return (
    <>
      <SEO
        title={`${info.name} - ${info.foundation.name}`}
        description={info.description}
      />
      <Container info={info} />
    </>
  );
};

export default FoundationPetPage;

export async function getStaticPaths() {
  const { data } = await client.query({
    query: gql`
      query Pets {
        pets {
          slug
          foundation {
            slug
          }
        }
      }
    `,
  });

  const paths = data.pets.map(pet => ({
    params: { pid: pet.slug, slug: pet.foundation.slug },
  }));

  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const { data } = await client.query({
    query: gql`
      query Pets($slug: String!) {
        pets(where: { slug: $slug }) {
          id
          description
          imageUrl
          name
          slug
          type
          age
          gender
          city
          department
          instagram
          size
          foundation {
            id
            description
            form
            imageUrl
            name
            slug
          }
        }
      }
    `,
    variables: { slug: params.pid },
  });

  return {
    props: {
      info: { ...data.pets[0] },
    },
    revalidate: 1,
  };
}
