import Head from "next/head";
import AboutUs from "../components/AboutUs";
import ContactForm from "../components/ContactForm";
import PetList from "../components/LatestPosts";
import { getProducts, getLatestPets } from "../utils/api";

const HomePage = ({ pets }) => {
  return (
    <div>
      <Head>
        <title>Huellitas de amor | Adopta un peludito</title>
      </Head>

      <h3 className="text-center text-lg mt-6">Publicaciones Recientes</h3>
      <PetList products={ pets } />
      
      < AboutUs id="nosotros" />

      <ContactForm />
    </div>
  );
};

export async function getStaticProps() {
  const pets = await getLatestPets();
  return { props: { pets } };
}

export default HomePage;
