import App from "next/app";
import { Provider } from "next-auth/client";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import "../styles/index.css";
import Layout from "../components/layoutComponents/Layout";

const MyApp = ({ Component, pageProps }) => {
  return (
    <Provider session={pageProps.session}>
      <Layout categories={pageProps.categories}>
        <Component {...pageProps} />
        <ToastContainer />
      </Layout>
    </Provider>
  );
};

MyApp.getInitialProps = async ctx => {
  const appProps = await App.getInitialProps(ctx);
  // const categories = await getCategories();
  const categories = [];
  return { ...appProps, pageProps: { categories, path: ctx.pathname } };
};

export default MyApp;
