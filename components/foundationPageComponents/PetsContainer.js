import PropTypes from "prop-types";
import { useEffect, useRef, useState } from "react";
import PetsList from "../LatestPosts";
import { gql } from "@apollo/client";
import client from "../../apollo-client";

const PetsContainer = ({ count, foundationSlug, pets }) => {
  const [petsCount] = useState(count);
  const [petsList, setPetsList] = useState(pets);
  const [page, setPage] = useState(1);
  const loader = useRef(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "20px",
      threshold: 1.0,
    };
    // initialize IntersectionObserver
    // and attaching to Load More div
    const observer = new IntersectionObserver(handleObserver, options);
    if (loader.current) {
      observer.observe(loader.current);
    }
  }, []);

  useEffect(() => {
    // here we simulate adding new posts to List
    const fetchContent = async () => {
      console.log("fetching");
      const { data } = await client.query({
        query: gql`
          query Foundations($slug: String!, $start: Int!, $limit: Int!) {
            foundations(where: { slug: $slug }) {
              pets(sort: "createdAt:desc", limit: $limit, start: $start) {
                slug
                imageUrl
                name
                foundation {
                  slug
                }
              }
            }
          }
        `,
        variables: { slug: foundationSlug, start: petsList.length, limit: 9 },
      });

      const newContent = data.foundations[0].pets;

      setPetsList((prevList) => prevList.concat(newContent));
    };

    if (page !== 1) fetchContent(); // Remove fetching when page loads
  }, [foundationSlug, page, petsList]);

  // here we handle what happens when user scrolls to Load More div
  // in this case we just update page variable
  const handleObserver = (entities) => {
    const target = entities[0];
    if (target.isIntersecting) {
      setPage((page) => page + 1);
    }
  };

  return (
    <>
      <h3 className="mt-8 text-xl">Nuestros Peluditos</h3>
      <PetsList pets={petsList} />

      {/* <!-- Add Ref to Load More div --> */}
      {petsList.length < petsCount ? (
        <div className="loading" ref={loader}>
          <h2>Cargando más peluditos...</h2>
        </div>
      ) : (
        <p className="mt-5 text-center">
          <b>Has visto todos nuestros peluditos!</b>
        </p>
      )}
    </>
  );
};

PetsContainer.propTypes = {
  count: PropTypes.number.isRequired,
  foundationSlug: PropTypes.string.isRequired,
  pets: PropTypes.array.isRequired,
};

export default PetsContainer;
