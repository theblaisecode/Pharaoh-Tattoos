import styled from "styled-components";
import aftercareHero from "../../img/aftercare/aftercareHero.png";
import piercingAftercareHero from "../../img/aftercare/aftercareHero2.png";

const AftercareWrapper = styled.div`
  margin-bottom: 10rem;

  #aftercareHero,
  #piercingAftercareHero {
    background: url(${aftercareHero}) center center/cover no-repeat;
    min-height: 78vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  #piercingAftercareHero {
    background: url(${piercingAftercareHero}) center center/cover no-repeat;
  }

  #aftercareHero .bgText {
    text-align: center;
    line-height: 16rem;
  }

  .aftercare {
    margin: 6rem 0;
  }

  .heading .contentTop .head {
    text-align: center;
    margin-bottom: 4rem;
  }

  .heading .contentTop .directions,
  .heading .contentTop .directionsContainer,
  .heading .contentTop .directions .instructions {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  .heading .contentTop .directionsContainer {
    gap: 6rem;
  }

  .heading .contentTop .directions h3 {
    font-size: 2.7rem;
    font-weight: 500;
  }

  .heading .contentTop .directions .instructions {
    gap: 0.8rem;
    padding-left: 2rem;
  }

  .heading .contentTop .directions .instructions .description {
    margin: 0;
    display: list-item;
    list-style-type: disc;
  }

  .heading .contentTop .directions .instructions .description::marker {
    color: var(--primary);
  }

  @media screen and (max-width: 550px) {
    #aftercareHero,
    #piercingAftercareHero {
      min-height: 45vh;
    }

    .aftercare {
      margin: 3rem 0;
    }

    .heading .contentTop .directions h3 {
      font-size: 2.5rem;
      font-weight: 400;
    }
  }
`;

export default AftercareWrapper;
