import Link from "next/link";
import PropTypes from "prop-types";

const PetsCards = ({ petInfo: pet }) => {
  return (
    <div
      key={pet.slug}
      className="relative rounded shadow-lg hover:shadow-xl transition-all duration-300"
    >
      <Link href={`/fundaciones/${pet.foundation.slug}/${pet.slug}`}>
        <a>
          <h4 className="absolute bottom-0 p-3 w-full bg-white bg-opacity-40 font-semibold text-center leading-6 tracking-widest truncate">
            {pet.name}
          </h4>
          <img className="rounded-lg" src={pet.imageUrl} alt={pet.name} />
        </a>
      </Link>
    </div>
  );
};

PetsCards.propTypes = {
  petInfo: PropTypes.object.isRequired,
};

export default PetsCards;
