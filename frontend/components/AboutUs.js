import React from "react";

const AboutUs = ({ ...rest }) => {
  return (
    <div className="px-10 sm:px-16 py-6" {...rest}>
      <h3 className="text-lg font-bold mb-3">Quiénes somos?</h3>
      <p>
        Somos un portal que ayuda a los animalitos a encontrar un hogar.
      </p>
    </div>
  );
};

export default AboutUs;
