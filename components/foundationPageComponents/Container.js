import PropTypes from "prop-types";
import ReactMarkdown from "react-markdown";
import rehypeKatex from "rehype-katex";
import { responsivePadding } from "../../styles/stylingVars";
import FormParagraph from "./FormParagraph";
import PetsContainer from "./PetsContainer";

const Container = ({ info }) => {
  const { id, name, imageUrl, description, pets, form, qty, slug } = info;

  return (
    <div className={`flex flex-col items-center ${responsivePadding}`}>
      <img className="mt-4 mb-10" src={imageUrl} alt={name} width="50%" />
      <small>
        FoundationID: <b>{id}</b>
      </small>

      <ReactMarkdown
        className="self-start"
        rehypePlugins={[rehypeKatex]}
        children={description}
      />

      <FormParagraph link={form} />

      <PetsContainer pets={pets} count={qty} foundationSlug={slug} />
    </div>
  );
};

Container.propTypes = {
  info: PropTypes.object.isRequired,
};

export default Container;
