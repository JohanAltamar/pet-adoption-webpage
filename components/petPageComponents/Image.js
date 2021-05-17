import PropTypes from "prop-types";

const Image = ({ name, url }) => {
  return (
    <section className="bg-black w-full">
      <img className="h-64 m-auto" src={url} alt={name} />
    </section>
  );
};

Image.propTypes = {
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default Image;
