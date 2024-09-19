import styled from "styled-components";
import galleryHero from "../../img/gallery/galleryHero.png";
import piercingsHero from "../../img/gallery/piercingHero.png";

const GalleryWrapper = styled.div`
  #galleryHero {
    background: url(${galleryHero}) center center/cover no-repeat;
    min-height: 78vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .artstyleContent,
  .artStyles {
    display: flex;
    flex-direction: column;
    /* gap: 3rem; */
  }

  .artStyles {
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 6rem 0 4rem 0;
    border-top: 0.1rem solid var(--textLight);
  }

  .artStyles .contentTop,
  .artStyles .contentBottom {
    margin-bottom: 3rem;
  }

  .artStyles .contentTop .head {
    margin-bottom: 0;
  }

  .artStyles .contentTop .description {
    color: var(--textGrey);
    margin-bottom: 1rem;
  }

  .artStyles .contentBottom {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 1.5rem;
  }

  .artStyles .contentBottom img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  #piercingsHero {
    background: url(${piercingsHero}) center center/cover no-repeat;
    min-height: 78vh;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 6rem;
  }

  .artStyles .contentBottom .imgDetails {
    position: relative;
    cursor: pointer;
    transform: scale(1);
    transition: 0.4s;
  }

  .artStyles .contentBottom .imgDetails:hover {
    cursor: pointer;
    transform: scale(0.95);
    transition: all 0.4s;
  }

  .artStyles .contentBottom .imgDetails img {
    display: block;
  }

  .artStyles .contentBottom .imgDetails .text {
    position: absolute;
    bottom: 0;
    background: var(--yellowLinearGradient2);
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    gap: 0.2rem;
    padding: 2rem;
    opacity: 0;
    visibility: hidden;
    transition: 0.4s;
  }

  .artStyles .contentBottom .imgDetails:hover .text {
    opacity: 1;
    visibility: visible;
    transition: 0.4s;
  }

  .artStyles .contentBottom .imgDetails .text p {
    font-size: 2.5rem;
  }

  .artStyles .contentBottom .imgDetails .text span {
    font-size: 1.4rem;
  }

  .modalContent,
  .imgContent {
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    background: var(--bg);
    height: 100vh;
    width: 100vw;
    opacity: 0;
    visibility: hidden;
    transform: scale(0.95);
    transition: opacity 0.4s ease, visibility 0.4s ease, transform 0.4s ease;
    z-index: 1;
  }

  .imgContent {
    background: var(--bgModal);
    z-index: 2;
  }

  .modalContent.active,
  .imgContent.active {
    opacity: 1;
    visibility: visible;
    transform: scale(1);
    transition: opacity 0.4s ease, visibility 0.4s ease, transform 0.4s ease;
  }

  .modalCard {
    max-width: 100%;
    max-height: 100%;
    overflow: hidden;
  }

  .modalCard button,
  .imgCard button {
    background: none;
    color: var(--primary);
    border: none;
    outline: none;
    padding: 3rem;
    border-radius: 0.4rem;
    transition: 0.4s;
    position: absolute;
    top: 1rem;
    right: 4rem;
    display: flex;
    justify-content: flex-end;
    transition: 0.4s;
    cursor: pointer;
  }

  .modalCard button:hover {
    color: var(--nav);
    transition: all 0.4s;
  }

  .modalCard button svg,
  .imgCard button svg {
    font-size: 2.5rem;
  }

  .modalInfo {
    display: flex;
    flex-direction: column;
    height: 100%; 
  }

  .modalInfo .artStyles .contentBottom {
    scrollbar-width: thin;
    overflow-y: auto;
    max-height: 78vh;
    width: 95%;
    grid-template-columns: repeat(8, 1fr);
  }

  .imgModalInfo .swiper {
    max-width: 60rem;
  }

  .imgModalInfo .swiper-wrapper {
    width: 100%;
    height: 75rem;
  }

  .imgModalInfo .swiper-slide {
    background-position: center;
    background-size: cover;
    width: 40rem;
    height: 100%;
    padding: 0 5rem;
  }

  .imgModalInfo .swiper-slide img {
    height: 100%;
    width: 100%;
    object-fit: fill;
  }

  .imgModalInfo .swiper-button-prev:after,
  .imgModalInfo .swiper-button-next:after {
    font-size: 3rem;
  }

  .imgModalInfo .swiper-button-prev,
  .imgModalInfo .swiper-button-next {
    top: 50%;
    transform: translateY(-50%);
    color: var(--primary);
  }

  .imgModalInfo .swiper-button-prev {
    left: -5px;
  }

  .imgModalInfo .swiper-button-next {
    right: -5px;
  }

  .imgModalInfo .text {
    position: absolute;
    bottom: 5%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin: auto;
    margin-left: 2.5rem;
    gap: 3rem;
    font-size: 2.5rem;
    font-weight: 500;
    color: var(--textLight, inherit);
  }

  .imgModalInfo .text span {
    font-weight: normal;
    color: #ffffff88;
    font-size: 2.2rem;
  }

  @media screen and (max-width: 550px) {
    #galleryHero,
    #piercingsHero {
      min-height: 45vh;
    }

    .artStyles {
      padding: 3rem 0 4rem 0;
    }

    .artStyles .contentTop .head {
      font-size: 2rem;
    }

    .artStyles .btn {
      font-size: 1.2rem;
    }

    .artStyles .contentBottom .imgDetails .text p {
      font-size: 1.5rem;
    }

    .artStyles .contentBottom .imgDetails .text span {
      font-size: 0.9rem;
    }

    .artStyles .contentBottom {
      gap: 0.5rem;
    }

    .imgModalInfo .swiper {
      max-width: 40rem;
    }

    .imgModalInfo .swiper-wrapper {
      height: 45rem;
    }

    .imgModalInfo .swiper-button-prev:after,
    .imgModalInfo .swiper-button-next:after {
      font-size: 2rem;
    }

    .imgModalInfo .text {
      font-size: 1.5rem;
    }

    .imgModalInfo .text span {
      font-size: 1.2rem;
    }

    .imgModalInfo .text {
      margin: 0 0 2rem 1.5rem;
    }

    .modalInfo .artStyles .contentBottom {
      grid-template-columns: repeat(4, 1fr);
    }

    .modalCard button,
    .imgCard button {
      padding: 3rem 0 3rem 3rem;
    }
  }

  @media (min-width: 551px) and (max-width: 950px) {
    #galleryHero,
    #piercingsHero {
      min-height: 45vh;
    }

    .artStyles .contentBottom {
      gap: 0.5rem;
    }

    .artStyles .contentBottom .imgDetails .text p {
      font-size: 1.5rem;
    }

    .artStyles .contentBottom .imgDetails .text span {
      font-size: 1rem;
    }

    .imgModalInfo .swiper {
      max-width: 53rem;
    }

    .imgModalInfo .swiper-wrapper {
      height: 65rem;
    }

    .imgModalInfo .swiper-button-prev:after,
    .imgModalInfo .swiper-button-next:after {
      font-size: 2.5rem;
    }

    .imgModalInfo .text {
      font-size: 2rem;
    }

    .imgModalInfo .text span {
      font-size: 1.8rem;
    }

    .imgModalInfo .text {
      margin: 0 0 2rem 2rem;
    }

    .modalInfo .artStyles .contentBottom {
      grid-template-columns: repeat(4, 1fr);
    }

    .modalCard button,
    .imgCard button {
      padding: 3rem 0 3rem 3rem;
    }
  }
`;

export default GalleryWrapper;
