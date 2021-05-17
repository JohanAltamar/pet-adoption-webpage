import PropTypes from "prop-types";

const Card = ({ align = "left", children }) => {
  return (
    <section className={`bg-white p-6 my-5 shadow-md text-${align} rounded-md`}>
      {children}
    </section>
  );
};

Card.propTypes = {
  align: PropTypes.oneOf(["left", "right", "center"]),
  children: PropTypes.node.isRequired,
};

export default Card;
