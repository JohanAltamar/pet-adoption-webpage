import React from "react";
import { responsivePadding } from "../styles/stylingVars";

const AboutUs = ({ ...rest }) => {
  return (
    <div className={`py-6 ${responsivePadding}`} {...rest}>
      <h3 className="text-lg font-bold mb-3">Quiénes somos?</h3>
      <p>Somos un portal que ayuda a los animalitos a encontrar un hogar.</p>
    </div>
  );
};

export default AboutUs;
