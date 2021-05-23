import PropTypes from "prop-types";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";
import Button from "../ui/Button";

const PaginationButtons = ({ showNext, showLast, onPageChange }) => {
  return (
    <section className="flex justify-center w-full mt-5">
      {showLast && (
        <Button
          color="secondary"
          variant="outlined"
          rounded="full"
          onClick={() => onPageChange(-1)}
        >
          <MdKeyboardArrowLeft size="24px" />
        </Button>
      )}
      {showNext && (
        <Button
          color="primary"
          variant="outlined"
          rounded="full"
          onClick={() => onPageChange(1)}
        >
          <MdKeyboardArrowRight size="24px" />
        </Button>
      )}
    </section>
  );
};

PaginationButtons.propTypes = {
  showNext: PropTypes.bool.isRequired,
  showLast: PropTypes.bool.isRequired,
  onPageChange: PropTypes.func.isRequired,
};

export default PaginationButtons;
