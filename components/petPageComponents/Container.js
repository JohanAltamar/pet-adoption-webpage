import Link from "next/link";
import PropTypes from "prop-types";
import ReactMarkdown from "react-markdown";
import rehypeKatex from "rehype-katex";
import { responsivePadding } from "../../styles/stylingVars";
import Card from "./Card";
import Image from "./Image";

const Container = ({ info }) => {
  return (
    <>
      {/* IMAGE */}
      <Image name={info.name} url={info.imageUrl} />
      {/* CONTENT */}
      <div className={`bg-gray-200 py-4 ${responsivePadding}`}>
        {/* PET INFO RESUME */}
        <Card align="center">
          <h1 className="text-2xl font-bold">{info.name}</h1>
          <small>PetID: {info.id}</small>
          {/* // TODO: add tamaño to colletion */}
          <h4 className="text-lg mt-2">
            {info.city}, {info.department}
          </h4>
          <h4 className="text-xl mt-2">
            {info.type} - {info.age} - {info.gender} - tamaño
          </h4>
        </Card>
        {/* PET DESCRIPTION */}
        <Card>
          <h4 className="text-2xl font-bold">Descripción</h4>
          <ReactMarkdown
            className="text-lg mt-2"
            rehypePlugins={[rehypeKatex]}
            children={info.description}
          />
        </Card>
        {/* FOUNDATION INFO */}
        <Card>
          <Link href={`/fundaciones/${info.foundation.slug}`}>
            <a>
              <h4 className="text-2xl font-bold">{info.foundation.name}</h4>
            </a>
          </Link>
          <small>FoundationID: {info.foundation.id}</small>
          <ReactMarkdown
            className="text-lg mt-2"
            rehypePlugins={[rehypeKatex]}
            children={info.foundation.description}
          />
        </Card>
        {/* ADMIN MESSAGE */}
        <Card>
          <h4 className="text-2xl font-bold">Mensaje del Administrador</h4>
          <p>
            Exigir dinero a cambio de dar una mascota en adopción es una
            práctica totalmente prohíbida, los aportes deben ser voluntarios. En
            caso de verse envuelto en esta situación puedes denunciarlo a través
            de correo electrónico, las denuncias son tomadas de forma anónima.
          </p>
        </Card>
      </div>
    </>
  );
};

Container.propTypes = {
  info: PropTypes.object.isRequired,
};

export default Container;
