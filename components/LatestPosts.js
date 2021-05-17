import Link from "next/link";
import { responsivePadding } from "../styles/stylingVars";

const PetsList = ({ home, pets }) => {
  return (
    <div
      className={`grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4 mt-8 ${
        home ? responsivePadding : ""
      }`}
    >
      {pets.map((_pet) => (
        <div
          key={_pet.slug}
          className="border rounded-lg bg-gray-100 hover:shadow-lg shadow-md"
        >
          <Link href={`/fundaciones/${_pet.foundation.slug}/${_pet.slug}`}>
            <a>
              <div className="p-2 rounded-lg">
                <h4 className="mt-1 font-semibold text-base text-center leading-tight truncate text-gray-700">
                  {_pet.name}
                </h4>
              </div>
              <div className="rounded-t-lg bg-white pt-2 pb-2">
                <img
                  className="crop mx-auto"
                  src={_pet.imageUrl}
                  alt={_pet.name}
                />
              </div>
            </a>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default PetsList;
