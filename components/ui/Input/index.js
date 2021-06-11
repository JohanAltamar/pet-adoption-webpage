import PropTypes from "prop-types";
import React from "react";

const InputField = ({ name, label, ...props }) => {
  const inputContainerClasses = "flex flex-col my-4";

  let { className, ...rest } = props;
  className = className
    ? `${className} ${inputContainerClasses}`
    : inputContainerClasses;

  return (
    <div className={className}>
      <label htmlFor={name}>{label}</label>
      <input id={name} name={name} {...rest} />
    </div>
  );
};

InputField.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default InputField;
