import Head from "next/head";
import { gql } from "@apollo/client";
import client from "../apollo-client";
import AboutUs from "../components/AboutUs";
import ContactForm from "../components/ContactForm";
import PetsList from "../components/LatestPosts";

const HomePage = ({ pets }) => {
  return (
    <div>
      <Head>
        <title>Huellitas de amor | Adopta un peludito</title>
      </Head>

      <h3 className="text-center text-lg mt-6">Peluditos Recientes</h3>

      <PetsList pets={pets} home />

      <AboutUs id="nosotros" />

      <ContactForm />
    </div>
  );
};

export async function getServerSideProps() {
  const { data } = await client.query({
    query: gql`
      query Pets {
        pets(sort: "createdAt:desc", limit: 6) {
          slug
          name
          imageUrl
          foundation {
            slug
          }
        }
      }
    `,
  });

  return { props: { pets: data.pets } };
}

export default HomePage;
