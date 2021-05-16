import PropTypes from "prop-types";

const FormParagraph = ({ link }) => {
  return (
    <p className="self-start mt-5">
      Si deseas adoptar uno de nuestros peluditos, llena el formulario de
      adopción haciendo click
      <a className="text-pink-700" href={link} target="_blank" rel="noreferrer">
        <span> aquí</span>
      </a>
    </p>
  );
};

FormParagraph.propTypes = {
  link: PropTypes.string.isRequired,
};

export default FormParagraph;
