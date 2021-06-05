import PropTypes from "prop-types";

const Button = ({ children, color, rounded, variant, ...restProps }) => {
  const btnClasses = `btn-${variant}-${color} btn rounded-${rounded}`;

  let { className, onClick, ...rest } = restProps;
  className = className ? `${className} ${btnClasses}` : btnClasses;

  return (
    <button
      className={className}
      onClick={() => {
        if (onClick) onClick();
      }}
      {...rest}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.oneOf(["primary", "secondary", "inherit"]).isRequired,
  onClick: PropTypes.func,
  rounded: PropTypes.oneOf(["xs", "sm", "md", "lg", "full"]).isRequired,
  variant: PropTypes.oneOf(["contained", "outlined", "text"]).isRequired,
};

export default Button;
