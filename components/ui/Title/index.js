import PropTypes from "prop-types";

const Title = ({
  align = "left",
  size = "lg",
  variant = "h1",
  weight = "bold",
  children,
}) => {
  const CustomTag = `${variant}`;
  return (
    <CustomTag
      className={`text-${align} text-${size} font-${weight} tracking-wider`}
    >
      {children}
    </CustomTag>
  );
};

Title.propTypes = {};

export default Title;
