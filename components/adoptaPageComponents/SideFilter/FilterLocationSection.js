import { useEffect, useState } from "react";

const FilterLocationSection = ({ title, onChange, pageParams }) => {
  const [locations, setLocations] = useState([]); // Save fetch results
  const { city, department } = pageParams; // Used to set the default value

  // fetch departments and cities
  useEffect(() => {
    fetch(
      "https://cdn.jsdelivr.net/gh/JohanAltamar/colombia-json@master/colombia.min.json",
    )
      .then(res => res.json())
      .then(data => setLocations(data))
      .catch(err => console.log(err));
  }, []);

  const handleLocationChange = ({ target }) => {
    const { value } = target;
    const resultArr = value.split("-").map(item => item.trim());
    onChange(resultArr); // [city, department]
  };

  return (
    <>
      <h4 className="mt-3">{title}</h4>
      <input
        className="w-full border-2 border-gray-300 bg-gray-100 rounded p-1"
        list="departamentos"
        name="department"
        id="department"
        defaultValue={city && department ? `${city} - ${department}` : ""}
        placeholder="Ciudad - Depto"
        onChange={handleLocationChange}
      />
      <datalist id="departamentos">
        {!!locations.length &&
          locations.map(({ departamento, ciudades }) =>
            ciudades.map((ciudad, idx) => (
              <option
                key={`${ciudad} ${departamento} ${idx}`}
                value={`${ciudad} - ${departamento}`}
              />
            )),
          )}
      </datalist>
    </>
  );
};

export default FilterLocationSection;
