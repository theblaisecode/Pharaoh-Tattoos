import styled from "styled-components";
import homeHeroImg from "../../img/home/homeHero.png";

const HomeWrapper = styled.div`
  /* ------------ Hero ------------ */
  #homeHero {
    background: url(${homeHeroImg}) center center/cover no-repeat;
    min-height: 92vh;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    margin-bottom: 15rem;
  }

  .heroContent {
    padding: 0 6rem;
  }

  .bgText.tat {
    position: absolute;
    top: 25%;
    left: 6.3%;
  }

  .bgText.pierce {
    position: absolute;
    top: 45%;
    right: 6.3%;
  }

  .heroText {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 35%;
    padding-bottom: 7rem;
  }

  .heroText h1 {
    font-size: 4rem;
  }

  /* ------------ Hero About ------------ */
  #heroAbout,
  #heroArtists,
  #previousJobs,
  #testimonial,
  #faq {
    margin-bottom: 15rem;
  }

  .heroAboutContent {
    background: var(--darkLinearGradient);
    padding: 4rem 0 4rem 6.4rem;
    display: flex;
    justify-content: space-between;
    margin: auto;
    width: 90%;
  }

  .heroAboutContent .contentTop {
    width: 54%;
  }

  .heroAboutContent .contentBottom {
    position: relative;
  }

  .heroAboutContent .contentBottom img {
    position: absolute;
    right: -70%;
    top: -43%;
  }

  /* ------------ Hero Artists ------------ */
  .heroArtistsContent {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 3rem;
  }

  .heroArtistsContent .contentTop,
  .previousJobsContent .contentTop,
  .testimonialContent .contentTop,
  .faqContent .contentTop {
    width: 53%;
    text-align: center;
  }

  .heroArtistsContent .contentBottom,
  .previousJobsContent .contentBottom {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1.5rem;
  }

  .heroArtistsContent .contentBottom .artistCard {
    position: relative;
  }

  .heroArtistsContent .contentBottom .artistCard img,
  .previousJobsContent .contentBottom .prevJobs img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .heroArtistsContent .contentBottom .artistCard .artistCardInfo {
    position: absolute;
    bottom: 0;
    width: 100%;
    text-align: center;
    padding: 2rem;
    background: var(--artistName);
  }

  .heroArtistsContent .contentBottom .artistCard .artistCardInfo .title {
    font-size: 3rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
  }

  .heroArtistsContent .contentBottom .artistCard .artistCardInfo .style {
    font-weight: 300;
    font-size: 1.8rem;
    letter-spacing: 2%;
    line-height: 3.5rem;
  }

  /* ------------ Hero Previous Jobs ------------ */
  .previousJobsContent .top,
  .previousJobsContent .button {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .previousJobsContent .contentTop {
    text-align: center;
    margin-bottom: 3rem;
  }

  .previousJobsContent a {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .previousJobsContent a svg {
    font-size: 2.5rem;
    color: var(--nav);
    transition: 0.4s;
  }
  .previousJobsContent a:hover svg {
    color: var(--textLight);
    transition: all 0.4s;
  }

  .previousJobsContent .button {
    margin-top: 6rem;
  }

  /* ------------ Hero Testimonial ------------ */
  #testimonial {
    background: var(--darkLinearGradient2);
    padding: 5rem 0;
  }

  .testimonialContent,
  .faqContent {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .testimonialContent .contentBottom {
    position: relative;
    width: 100%; /* Make sure contentBottom takes full width */
    margin: 3rem 0 0 0;
  }

  .testimonialSwiper {
    width: 65%;
    max-width: 100%;
    overflow: hidden;
  }

  .testimonialContent .contentBottom .testimony {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 3rem;
    text-align: center;
    width: 100%;
    max-width: 100%;
    box-sizing: border-box;
  }

  .testimonialContent .contentBottom .testimony .author {
    font-size: 3rem;
    color: var(--primary);
    font-weight: 600;
  }

  .testimonialContent .contentBottom .testimony .testimonialNote {
    position: relative;
    margin-bottom: 9rem;
  }

  .testimonialContent .contentBottom svg {
    color: var(--primary);
    font-size: 2.3rem;
    transform: scaleY(-1);
  }

  .testimonialContent .contentBottom .left {
    position: absolute;
    top: 25%;
    left: 15%;
  }

  .testimonialContent .contentBottom .testimony .testimonialNote p {
    margin: auto;
    width: 83%;
  }

  .testimonialContent .contentBottom .right {
    position: absolute;
    bottom: 25%;
    right: 15%;
  }

  /* Base styles for Swiper pagination bullets */
  .testimonialContent .swiper-pagination-bullet {
    background-color: #bac0f3;
    width: 0.8rem;
    height: 0.8rem;
    opacity: 0.7;
    transition: 0.4s;
    border-radius: var(--swiper-pagination-bullet-border-radius, 5rem);
  }

  /* Active pagination bullet styles */
  .testimonialContent .swiper-pagination-bullet-active {
    background-color: var(--primary);
    width: 1.5rem;
    opacity: 1;
    border-radius: var(--swiper-pagination-bullet-border-radius, 1rem);
    transition: all 0.4s;
  }

  /* ------------ Hero FAQ ------------ */
  .faqContent .contentBottom {
    margin: auto;
    margin-top: 3rem;
    width: 100%;
  }

  .faqContent .contentBottom .all {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 3rem;
  }

  .faqContent .contentBottom .all .firstFAQ,
  .faqContent .contentBottom .all .secondFAQ {
    flex: 1;
  }
  .faqContent .question {
    border-bottom: 0.1rem solid var(--primary);
    transition: 0.4s;
  }

  .faqContent .question .ask {
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 1.5rem 0;
    border: none;
    background: none;
    outline: none;
    color: var(--textLight);
    cursor: pointer;
    font-size: 1.6rem;
    transition: 0.4s;
  }

  .faqContent .question .ask span {
    color: var(--primary);
    transition: 0.4s;
  }

  .faqContent .question .answer-wrapper {
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.3s ease-out, opacity 0.3s ease-out;
    opacity: 0;
  }

  .faqContent .question .answer-wrapper.active {
    max-height: 100rem;
    opacity: 1;
    transition: max-height 0.5s ease-in, opacity 0.5s ease-in;
  }

  .faqContent .question p.description {
    font-size: 1.5rem;
    line-height: 2.5rem;
    background: var(--faq);
    padding: 0 2rem 1.8rem 2rem;
    margin: 0;
    transition: 0.4s;
  }

  .faqContent .question:hover {
    background: var(--faq);
    border-bottom: 0.1rem solid var(--textLight);
  }

  .faqContent .question.active {
    border-bottom: 0.1rem solid var(--textLight);
  }

  .faqContent .question:hover .ask,
  .faqContent .question .ask.active {
    padding: 1.5rem 2rem;
    transition: all 0.4s;
  }

  .faqContent .question .ask.active {
    background: var(--faq);
  }

  .faqContent .question:hover .ask span,
  .faqContent .question .ask.active span {
    color: var(--textLight);
    transition: all 0.4s;
  }

  @media screen and (max-width: 550px) {
    #homeHero {
      min-height: 75vh;
      margin-bottom: 15rem;
    }

    .heroText {
      width: 100%;
    }

    .heroText h1 {
      font-size: 3.5rem;
    }

    .bgText.tat {
      top: 15%;
      left: 5%;
    }

    .bgText.pierce {
      top: 23%;
      right: 5%;
    }

    .heroAboutContent {
      margin: 0;
      padding: 3rem 0 3rem 3rem;
    }

    .heroAboutContent .contentTop {
      width: 100%;
    }

    .heroAboutContent .contentBottom {
      display: none;
    }

    .heroArtistsContent .contentBottom {
      grid-template-columns: repeat(2, 1fr);
      gap: 1rem;
    }

    .heroArtistsContent .contentBottom .artistCard .artistCardInfo .style {
      font-size: 1.3rem;
      line-height: 1.5rem;
    }

    .heroArtistsContent .contentBottom .artistCard .artistCardInfo {
      padding: 2rem 0.2rem;
    }

    .heroArtistsContent .contentBottom .artistCard .artistCardInfo .title {
      font-size: 2rem;
    }

    .heroArtistsContent .contentTop,
    .previousJobsContent .contentTop,
    .testimonialContent .contentTop,
    .faqContent .contentTop {
      width: 95%;
    }

    .previousJobsContent .contentBottom {
      grid-template-columns: repeat(3, 1fr);
      gap: 0.5rem;
    }

    .testimonialContent .contentBottom svg {
      font-size: 1.8rem;
    }

    .testimonialContent .contentBottom .left {
      top: 13%;
      left: 3%;
    }

    .testimonialContent .contentBottom .right {
      bottom: 25%;
      right: 3%;
    }

    .testimonialSwiper {
      width: 98%;
      max-width: 100%;
      overflow: hidden;
    }

    .faqContent .question {
      /* width: 98%; */
    }
  }

  @media screen and (max-width: 768px) {
    #faq {
      margin-bottom: 10rem;
    }

    .faqContent .contentBottom .all {
      grid-template-columns: repeat(1, 1fr);
      column-gap: 0;
    }
  }

  @media (min-width: 551px) and (max-width: 950px) {
    #homeHero {
      min-height: 75vh;
      margin-bottom: 15rem;
    }

    .heroText {
      width: 50%;
      padding-bottom: 5rem;
    }

    .heroText h1 {
      font-size: 3.5rem;
      line-height: 4rem;
    }

    .heroText .description {
      margin: 0;
    }

    .bgText.tat {
      top: 10%;
      left: 3%;
    }

    .bgText.pierce {
      top: 23%;
      right: 3%;
    }

    .heroAboutContent {
      padding: 4rem 2rem;
      margin: 0;
    }

    .heroAboutContent .contentTop {
      width: 100%;
    }

    .heroAboutContent .contentBottom {
      width: 62%;
    }

    .heroAboutContent .contentBottom img {
      right: -30%;
      top: -12%;
      width: 100%;
    }

    .heroArtistsContent .contentBottom {
      gap: 0.5rem;
    }

    .heroArtistsContent .contentBottom .artistCard .artistCardInfo .style {
      font-size: 1.3rem;
      line-height: 1.5rem;
    }

    .heroArtistsContent .contentBottom .artistCard .artistCardInfo {
      padding: 2rem 0.2rem;
    }

    .heroArtistsContent .contentBottom .artistCard .artistCardInfo .title {
      font-size: 2rem;
    }

    .heroArtistsContent .contentTop,
    .previousJobsContent .contentTop,
    .testimonialContent .contentTop,
    .faqContent .contentTop {
      width: 68%;
    }

    .previousJobsContent .contentBottom {
      gap: 0.5rem;
    }

    .testimonialContent .contentBottom svg {
      font-size: 1.8rem;
    }

    .testimonialSwiper {
      width: 70%;
    }

    #faq {
      margin-bottom: 10rem;
    }

    .faqContent .contentBottom .all {
      column-gap: 1rem;
    }

    .faqContent .question .ask {
      font-size: 1.4rem;
    }
  }

  @media (min-width: 951px) and (max-width: 1200px) {
    .bgText.tat {
      top: 14%;
      left: 3%;
    }

    .bgText.pierce {
      top: 28%;
      right: 3%;
    }

    .heroText {
      width: 45%;
      padding-bottom: 5rem;
    }

    .heroAboutContent {
      padding: 4rem 2rem;
      margin: 0;
    }

    .heroAboutContent .contentTop {
      width: 100%;
    }

    .heroAboutContent .contentBottom {
      width: 62%;
    }

    .heroAboutContent .contentBottom img {
      right: -30%;
      top: -12%;
      width: 100%;
    }

    .heroArtistsContent .contentBottom,
    .previousJobsContent .contentBottom {
      gap: 0.5rem;
    }

    .heroArtistsContent .contentBottom .artistCard .artistCardInfo .title {
      font-size: 2.5rem;
    }

    .heroArtistsContent .contentBottom .artistCard .artistCardInfo .style {
      font-size: 1.3rem;
    }

    .heroArtistsContent .contentTop,
    .previousJobsContent .contentTop,
    .testimonialContent .contentTop,
    .faqContent .contentTop {
      width: 70%;
    }

    /* #heroAbout,
    #heroArtists,
    #previousJobs,
    #testimonial, */
    #faq {
      margin-bottom: 8rem;
    }
  }

  @media (min-width: 1201px) and (max-width: 1440px) {
    .bgText.tat {
      top: 14%;
      left: 3%;
    }

    .bgText.pierce {
      top: 30%;
      right: 3%;
    }

    .heroText {
      width: 45%;
    }

    .heroAboutContent .contentBottom img {
      right: -30%;
      top: -28%;
    }

    .heroArtistsContent .contentBottom,
    .previousJobsContent .contentBottom {
      gap: 0.5rem;
    }

    .heroArtistsContent .contentBottom .artistCard .artistCardInfo .title {
      font-size: 2.5rem;
    }

    .heroArtistsContent .contentBottom .artistCard .artistCardInfo .style {
      font-size: 1.5rem;
    }

    .heroArtistsContent .contentTop,
    .previousJobsContent .contentTop,
    .testimonialContent .contentTop,
    .faqContent .contentTop {
      width: 63%;
    }
  }

  @media (min-width: 1441px) and (max-width: 1628px) {
    .bgText.tat {
      top: 19%;
    }

    .bgText.pierce {
      top: 36%;
    }
  }

  @media (min-width: 636px) and (max-width: 668px) {
    .heroText {
      width: 60%;
    }

    .heroArtistsContent .contentBottom .artistCard .artistCardInfo .style {
      font-size: 1.1rem;
    }
  }

  @media (min-width: 501px) and (max-width: 635px) {
    .heroText {
      width: 70%;
    }

    .heroArtistsContent .contentBottom .artistCard .artistCardInfo .style {
      font-size: 1rem;
    }
  }
  @media (min-width: 551px) and (max-width: 590px) {
    .heroAboutContent .contentTop {
      width: 100%;
    }

    .heroAboutContent .contentBottom {
      display: none;
    }
  }
`;

export default HomeWrapper;
