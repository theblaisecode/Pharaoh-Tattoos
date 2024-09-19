import { FaAngleDown, FaAngleUp } from "react-icons/fa6";

const FAQSection = ({ faqs, isToggle, toggleQuestion }) => {
  return (
    <>
      {faqs.map(({ id, question, answer, answer2 }) => (
        <div key={id} className={`question ${isToggle === id ? "active" : ""}`}>
          <button
            onClick={() => toggleQuestion(id)}
            className={`ask ${isToggle === id ? "active" : ""}`}>
            <p>{question}</p>

            <span>{isToggle === id ? <FaAngleUp /> : <FaAngleDown />}</span>
          </button>

          <div className={`answer-wrapper ${isToggle === id ? "active" : ""}`}>
            <p className="description">
              {answer} {answer2}
            </p>
          </div>
        </div>
      ))}
    </>
  );
};

export default FAQSection;
