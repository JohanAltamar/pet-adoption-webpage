import { useEffect, useReducer, useState } from "react";
import { useRouter } from "next/router";

import { responsivePadding } from "../../styles/stylingVars";
import reducer, { initialPageParams } from "../../utils/reducers/adoptaPage";
import { fetchPets } from "../../utils/api/pets";
import getUrlString from "../../utils/getUrlString";
import PetsList from "../LatestPosts";
import PaginationButtons from "./PaginationButtons";
import PetsLimitSelect from "./PetsLimitSelect";
import SideFilter from "./SideFilter/Index";
import PetsOrderBy from "./PetsOrderBy";

const PetsContainer = () => {
  const { push, query } = useRouter();

  const [loading, setLoading] = useState(false);

  const [state, dispatch] = useReducer(reducer, initialPageParams);
  const { petsCount, petsList, pageParams } = state;
  const { limit, page, sort, order } = pageParams;

  const fetchContent = async searchObject => {
    setLoading(true);
    const { pets, petsCount } = await fetchPets(searchObject);
    if (pets) {
      setLoading(false);
    }
    dispatch({ type: "ADD_CONTENT", payload: { pets, petsCount } });
  };

  // HANDLE QUERY CHANGES - IF QUERY CHANGE FETCH FUNCTION DOES TOO
  useEffect(() => {
    const queryExists = !!Object.keys(query).length;
    if (queryExists) {
      // Update page params
      dispatch({ type: "UPDATE_PAGE_PARAMS", payload: query });
      fetchContent(query); // Fetch content with query settings
    } else {
      push(`/adopta?${getUrlString(pageParams)}`);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  const handleChangePage = factor => {
    push(`/adopta?${getUrlString({ ...pageParams, page: +page + factor })}`);
  };

  const handleLimitChange = ({ target }) => {
    const { value } = target;
    push(`/adopta?${getUrlString({ ...pageParams, limit: +value })}`);
  };

  const handleSortChange = (_sort, _order) => {
    push(
      `/adopta?${getUrlString({ ...pageParams, sort: _sort, order: _order })}`,
    );
  };

  return (
    <article className={`${responsivePadding} bg-gray-100 min-h-screen`}>
      <section className="grid grid-cols-5 gap-6">
        <SideFilter />

        <section className="col-span-full md:col-span-4 flex flex-col items-end">
          <div className="flex justify-between w-full mt-5">
            <PetsOrderBy
              value={[sort, order].join(":")}
              onChange={handleSortChange}
            />
            <PetsLimitSelect limit={limit} onChange={handleLimitChange} />
          </div>
          {loading ? (
            <h3>Cargando...</h3>
          ) : !!petsList.length ? (
            <PetsList pets={petsList} />
          ) : (
            <h3 className="self-center mt-20">
              El filtro no arrojó resultados. Prueba con otras opciones
            </h3>
          )}
        </section>
      </section>
      <PaginationButtons
        showLast={!!(page - 1)}
        showNext={limit * page < petsCount}
        onPageChange={handleChangePage}
      />
    </article>
  );
};

export default PetsContainer;
