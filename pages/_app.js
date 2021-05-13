import App from "next/app";
import Layout from "../components/Layout";
// import { getCategories } from "../utils/api";
import "../styles/index.css";

const MyApp = ({ Component, pageProps }) => {
  return (
    <Layout categories={pageProps.categories}>
      <Component {...pageProps} />
    </Layout>
  );
};

MyApp.getInitialProps = async (ctx) => {
  const appProps = await App.getInitialProps(ctx);
  // const categories = await getCategories();
  const categories = [];
  return { ...appProps, pageProps: { categories, path: ctx.pathname } };
};

export default MyApp;
