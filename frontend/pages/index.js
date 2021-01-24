import Head from "next/head";
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
      
      <div id="nosotros">nosotros</div>
      <div id="contacto">contacto</div>
    </div>
  );
};

export async function getStaticProps() {
  const pets = await getLatestPets();
  return { props: { pets } };
}

export default HomePage;
