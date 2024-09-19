import styled from "styled-components";

const ContactFormWrapper = styled.div`
  margin: 6rem 0;

  #contactForm .contentTop {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
    margin: 0 auto 2rem auto;
    width: 53%;
  }

  form,
  .formInfo {
    display: flex;
    gap: 4rem;
    width: 100%;
  }

  form {
    flex-direction: column;
    gap: 2rem;
  }

  .formInfo div,
  .formMessage div {
    position: relative;
    flex: 1;
  }

  .formInfo svg,
  .formMessage svg {
    position: absolute;
    top: 0;
    left: 0;
    font-size: 2rem;
    width: 2.3rem;
    height: 2.3rem;
    margin: 1.7rem 2rem 1.7rem 2.5rem;
    color: var(--textLight);
    transition: 0.4s;
  }

  .formMessage svg {
    margin-top: 2rem;
  }

  input,
  textarea {
    border: 0.2rem solid rgba(214, 143, 7, 0.3);
    border-radius: 1.6rem;
    width: 100%;
    background: transparent;
    padding: 1.6rem 6.5rem;
    color: var(--textLight);
    font-size: 1.8rem;
    outline: none;
    transition: all 0.4s;
  }

  input::placeholder,
  textarea::placeholder {
    font-size: 1.8rem;
    font-family: "Poppins", system-ui;
  }

  .formInfo div:hover svg,
  .formMessage div:hover svg,
  .formInfo div:focus-within svg,
  .formMessage div:focus-within svg {
    color: var(--primary);
    transition: all 0.4s;
  }

  input:focus,
  input:hover,
  textarea:focus,
  textarea:hover {
    border: 0.2rem solid var(--primary);
    transition: all 0.4s;
  }

  .buttons {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media screen and (max-width: 550px) {
    form .btn {
      font-size: 1.2rem;
    }

    form,
    .formInfo {
      gap: 2rem;
      flex-direction: column;
    }

    #contactForm .contentTop {
      width: 95% ;
    }
  }

  @media (min-width: 551px) and (max-width: 950px) {
    form,
    .formInfo {
      gap: 2rem;
      flex-direction: column;
    }

    #contactForm .contentTop {
      width: 95% ;
    }
  }

  @media (min-width: 951px) and (max-width: 1200px) {
    #contactForm .contentTop {
      width: 75% ;
    }
  }
`;

export default ContactFormWrapper;
