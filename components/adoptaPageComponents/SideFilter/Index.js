import { useRouter } from "next/router";
import { createContext, useContext, useState } from "react";

import Button from "../../ui/Button";
import FilterLocationSection from "./FilterLocationSection";
import FilterSection from "./FilterSection";
import getUrlString from "../../../utils/getUrlString";
import * as filterOptions from "./filterOptions";

const SideFilter = () => {
  const router = useRouter();
  const [filter, setFilter] = useState(router.query);

  const handleFilterChanges = ([groupName, option]) => {
    // gender: ["male", "female"]
    // If filter[groupName] exists, add to or remove from the array.
    // If NOT create a new Array.
    if (filter[groupName]) {
      // If is an Array, add or remove it
      // If NOT set an empty Array or convert it to one and add the option
      if (Array.isArray(filter[groupName])) {
        setFilter({
          ...filter,
          [groupName]: filter[groupName]?.includes(option)
            ? filter[groupName]?.filter(item => item !== option)
            : [...filter[groupName], option],
        });
      } else {
        setFilter({
          ...filter,
          [groupName]:
            filter[groupName] === option ? [] : [filter[groupName], option],
        });
      }
    } else {
      setFilter({
        ...filter,
        [groupName]: [option],
      });
    }
  };

  const handleLocationChanges = ([city, department]) => {
    setFilter({ ...filter, city, department });
  };

  const handleFilterSubmit = ev => {
    ev.preventDefault();
    router.push(`/adopta?${getUrlString({ ...filter, page: 1 })}`);
  };

  return (
    <SideFilterContext.Provider
      value={{ filter, handleFilterChanges, handleLocationChanges }}
    >
      <aside className="hidden md:block md:col-span-1">
        <article className="bg-white mt-5 p-4 shadow-xl rounded">
          <h3 className="font-bold">Filtrar Por:</h3>
          <form onSubmit={handleFilterSubmit}>
            <FilterSection
              title="Tipo"
              options={filterOptions.typeOptions}
              groupName="type"
            />
            <FilterSection
              title="Género"
              options={filterOptions.genderOptions}
              groupName="gender"
            />
            <FilterSection
              title="Edad"
              options={filterOptions.ageOptions}
              groupName="age"
            />
            <FilterLocationSection
              title="Ubicación"
              onChange={handleLocationChanges}
              pageParams={filter}
            />
            <Button
              variant="contained"
              color="primary"
              rounded="lg"
              type="submit"
            >
              Filtrar
            </Button>
          </form>
        </article>
      </aside>
    </SideFilterContext.Provider>
  );
};

const SideFilterContext = createContext(null);
export const useSideFilterContext = () => useContext(SideFilterContext);

export default SideFilter;
