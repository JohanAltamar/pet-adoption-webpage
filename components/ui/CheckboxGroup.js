import PropTypes from "prop-types";
import Checkbox from "./Checkbox";
import { useSideFilterContext } from "../adoptaPageComponents/SideFilter/Index";

const CheckboxGroup = ({ options, groupName }) => {
  const { filter, handleFilterChanges } = useSideFilterContext();

  const handleChanges = ({ target }) => {
    handleFilterChanges([groupName, target.name]);
  };

  return (
    !!options.length && (
      <div name={groupName} className="flex flex-col items-start">
        <div className="flex flex-col">
          {options.map((option, idx) => (
            <Checkbox
              key={idx}
              checked={filter[groupName]?.includes(option.name)}
              onChange={handleChanges}
              {...option}
            />
          ))}
        </div>
      </div>
    )
  );
};

CheckboxGroup.propTypes = {
  groupName: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
};

export default CheckboxGroup;
