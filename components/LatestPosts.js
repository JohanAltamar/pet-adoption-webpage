import { useRouter } from "next/router";
import { responsivePadding } from "../styles/stylingVars";
import Button from "./ui/Button";
import PetsCards from "./ui/PetsCards";

const PetsList = ({ home, pets }) => {
  const router = useRouter();
  return (
    <>
      <div
        className={`grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-6 mt-5 ${
          home ? responsivePadding : ""
        }`}
      >
        {pets.map(_pet => (
          <PetsCards key={_pet.slug} petInfo={_pet} />
        ))}
      </div>
      {home && (
        <div className="w-32 m-auto mt-5">
          <Button
            variant="outlined"
            color="primary"
            rounded="lg"
            onClick={() => router.push("/adopta")}
          >
            Ver Más
          </Button>
        </div>
      )}
    </>
  );
};

export default PetsList;
