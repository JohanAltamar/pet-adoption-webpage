import PropTypes from "prop-types";
import { responsivePadding } from "../../../styles/stylingVars";

const Container = props => {
  let { className, ...rest } = props;

  className = className
    ? `${className} ${responsivePadding}`
    : `${responsivePadding}`;

  return <div className={className} {...rest} />;
};

Container.propTypes = {
  className: PropTypes.string,
};

export default Container;
