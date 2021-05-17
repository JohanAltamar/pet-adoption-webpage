import { responsivePadding } from "../../styles/stylingVars";

const Footer = () => {
  return (
    <footer className={`flex justify-between py-6 ${responsivePadding}`}>
      <p className="text-xs font-semibold text-gray-600">
        Huellitas de amor - Desarrollado por{" "}
        <a href="https://johanaltamar.com" target="_blank" rel="noreferrer">
          Johan Altamar
        </a>
      </p>
      <div className="flex gap-3 ml-4">
        <a href="https://twitter.com/strapijs" className="max-w-xs ml-4">
          <img src="/twitter.svg" alt="Twitter" width="20px" />
        </a>
        <a href="https://facebook.com/strapijs" className="ml-3">
          <img src="/facebook.svg" alt="Facebook" width="20px" />
        </a>
        <a
          href="https://github.com/strapi/strapi-starter-next-ecommerce"
          className="ml-3"
        >
          <img src="/instagram.svg" alt="Instagram" width="20px" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
