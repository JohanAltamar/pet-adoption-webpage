import PropTypes from "prop-types";
import CheckboxGroup from "../../ui/CheckboxGroup";

const FilterSection = ({ title, options, groupName }) => {
  return (
    <>
      <h4 className="mt-3">{title}</h4>
      <CheckboxGroup options={options} groupName={groupName} />
    </>
  );
};

FilterSection.propTypes = {
  title: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  groupName: PropTypes.string.isRequired,
};

export default FilterSection;
