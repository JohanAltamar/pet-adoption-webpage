import Head from "next/head";
import ProductsList from "../components/ProductsList";
import { getProducts } from "../utils/api";

const HomePage = ({ products }) => {
  return (
    <div>
      <Head>
        <title>Huellitas de amor | Adopta un peludito</title>
      </Head>
      <ProductsList products={products} />
      <div id="nosotros">nosotros</div>
      <div id="contacto">contacto</div>
    </div>
  );
};

export async function getStaticProps() {
  const products = await getProducts();
  return { props: { products } };
}

export default HomePage;
