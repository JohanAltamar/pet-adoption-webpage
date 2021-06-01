import PropTypes from "prop-types";
import Head from "next/head";

const SEO = ({ description, title }) => {
  return (
    <Head>
      <title>{title ? `${title} | Adopta un amigo` : "Adpta un amigo"}</title>
      {description && <meta name="description" content={description} />}
    </Head>
  );
};

SEO.propTypes = {
  description: PropTypes.string,
  title: PropTypes.string,
};

export default SEO;
