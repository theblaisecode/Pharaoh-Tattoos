import { FaAngleRight } from "react-icons/fa6";

function Button({ buttonFunction, buttonText }) {
  return (
    <button to="/" className="btn" onClick={buttonFunction}>
      {buttonText}
      <span>
        <FaAngleRight />
      </span>
    </button>
  );
}

export default Button;
