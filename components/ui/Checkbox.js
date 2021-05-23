import PropTypes from "prop-types";

const Checkbox = ({ checked, name, label, onChange }) => {
  return (
    <label className="inline-flex items-center cursor-pointer">
      <input
        name={name}
        type="checkbox"
        className="form-checkbox h-5 w-5"
        defaultChecked={checked}
        onChange={onChange}
      />
      <span className="ml-2 text-gray-700">{label}</span>
    </label>
  );
};

Checkbox.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Checkbox;
