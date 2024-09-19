import styled from "styled-components";

const AppointmentWrapper = styled.div`
  margin-top: 15rem;
  margin-bottom: 5rem;

  .appointmentContent {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .appointmentContent .contentTop,
  .appointmentContent .contentBottom {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
    margin: 0 auto 2rem auto;
    width: 53%;
  }

  .appointmentContent .contentBottom {
    width: 100%;
    margin: 0;
    gap: 4rem;
  }

  .appointmentContent .contentBottom .contact,
  .appointmentContent .contentBottom .formContainer,
  .appointmentContent .contentBottom .clientDetails {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 100%;
    gap: 5rem;
  }

  .appointmentContent .contentBottom .formContainer {
    align-items: flex-start;
    gap: 1rem;
  }

  .appointmentContent .contentBottom .formContainer form {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  .appointmentContent .contentBottom .formContainer .formImg {
    flex: 0.8;
  }

  .appointmentContent .contentBottom .formContainer form {
    flex: 1.2;
  }

  .appointmentContent .contentBottom .clientDetails {
    text-align: left;
    gap: 1.5rem;
  }

  .appointmentContent .contentBottom .clientDetails div {
    flex: 1;
  }

  .appointmentContent .contentBottom label {
    display: block;
  }

  .appointmentContent .contentBottom input,
  .appointmentContent .contentBottom select,
  .appointmentContent .contentBottom textarea {
    margin-top: 0.8rem;
    display: block;
    width: 100%;
    background: rgba(225, 225, 225, 0.5);
    border: 0.2rem solid #d9d9d9;
    outline: none;
    padding: 1rem 2rem;
    color: var(--textLight);
    transition: 0.4s;
  }

  .appointmentContent .contentBottom input:focus,
  .appointmentContent .contentBottom select:focus,
  .appointmentContent .contentBottom textarea:focus {
    border: 0.2rem solid var(--primary);
    background: var(--artistName);
    outline: none;
    transition: all 0.4s;
  }

  .phoneInputWrapper {
    display: flex;
    gap: 1.5rem;
  }

  .appointmentContent .contentBottom select:focus option {
    background: rgba(214, 143, 7, 0.8);
  }

  .appointmentContent .contentBottom span {
    color: var(--textGrey);
    font-size: 1.4rem;
  }

  .appointmentContent .contentBottom textarea {
  }

  @media screen and (max-width: 550px) {
    .appointmentContent .contentTop,
    .appointmentContent .contentBottom {
      margin-bottom: 0;
      width: 95%;
    }

    .appointmentContent .contentBottom .contact,
    .appointmentContent .contentBottom .clientDetails {
      flex-direction: column;
      gap: 1rem;
    }

    .head2 {
      font-size: 2rem;
      margin-bottom: 0;
    }

    .appointmentContent .contentBottom .formContainer {
      flex-direction: column;
      gap: 1rem;
    }

    .appointmentContent .contentBottom .formContainer .formImg {
      flex: 1;
      width: 100%;
    }

    .appointmentContent .contentBottom .formContainer .formImg img {
      width: 100%;
      height: 25rem;
      object-fit: cover;
    }

    .appointmentContent .contentBottom .clientDetails {
      align-items: flex-start;
      width: 100%;
    }

    .appointmentContent .contentBottom .clientDetails div {
      flex: 1;
      width: 100%;
    }
  }

  @media (min-width: 551px) and (max-width: 950px) {
    .appointmentContent .contentTop,
    .appointmentContent .contentBottom {
      margin-bottom: 0;
      width: 95%;
    }

    .appointmentContent .contentBottom .contact {
      flex-direction: column;
      gap: 1rem;
    }

    .head2 {
      font-size: 2rem;
      margin-bottom: 0;
    }

    .appointmentContent .contentBottom .formContainer {
      flex-direction: column;
      gap: 1rem;
    }

    .appointmentContent .contentBottom .formContainer .formImg,
    .appointmentContent .contentBottom .formContainer form {
      flex: 1;
      width: 100%;
    }

    .appointmentContent .contentBottom .formContainer .formImg img {
      width: 100%;
      height: 25rem;
      object-fit: cover;
    }
  }

  @media (min-width: 951px) and (max-width: 1019px) {
    .head2 {
      font-size: 2.5rem;
      margin-bottom: 0;
    }
  }
`;

export default AppointmentWrapper;
