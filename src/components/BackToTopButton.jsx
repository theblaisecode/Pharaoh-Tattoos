import { FaArrowUpLong } from "react-icons/fa6";
import styled from "styled-components";

const BtnStyling = styled.button`
  position: fixed;
  bottom: 5rem;
  right: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1.5rem 0.5rem;
  font-size: 2rem;
  background-color: var(--nav);
  color: var(--bg);
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  opacity: ${(props) => (props.visible ? "1" : "0")};
  pointer-events: ${(props) => (props.visible ? "auto" : "none")};
  transition: opacity 0.4s ease, pointer-events 0.4s ease;
  z-index:4;

  @media screen and (max-width: 550px) {
    bottom: 12rem;
    right: 2rem;
    padding: 1rem 0.5rem;
    font-size: 1.5rem;
  }
`;

function BackToTopButton({ backToTop, scrollToTop }) {
  return (
    <BtnStyling onClick={scrollToTop} visible={backToTop}>
      <FaArrowUpLong />
    </BtnStyling>
  );
}

export default BackToTopButton;
