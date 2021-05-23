import PropTypes from "prop-types";

const colors = {
  primary: {
    normal: "yellow-500",
    hover: "yellow-600",
  },
  secondary: {
    normal: "red-500",
    hover: "red-600",
  },
};

const variants = {
  contained: {
    primary: `bg-${colors.primary.normal} hover:bg-${colors.primary.hover} border-${colors.primary.normal} hover:border-${colors.primary.hover} text-white`,
    secondary: `bg-${colors.secondary.normal} hover:bg-${colors.secondary.hover} border-${colors.secondary.normal} hover:border-${colors.secondary.hover} text-white`,
    inherit: `bg-transparent hover:bg-blue-100`,
  },
  outlined: {
    primary: `bg-transparent border-${colors.primary.normal} text-${colors.primary.normal} hover:border-${colors.primary.hover} hover:text-${colors.primary.hover}`,
    secondary: `bg-transparent border-${colors.secondary.normal} text-${colors.secondary.normal} hover:border-${colors.secondary.hover} hover:text-${colors.secondary.hover}`,
  },
  text: "border-none",
};

const Button = ({ children, color, onClick, rounded, variant, ...rest }) => {
  return (
    <button
      className={`${variants[variant][color]} p-2 m-2 border-2 rounded-${rounded} hover:shadow-lg font-bold tracking-widest uppercase transition-all duration-300`}
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
