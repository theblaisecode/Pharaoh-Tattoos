import { useRef } from "react";
import { Link } from "react-router-dom";
import FAQSection from "../../components/FaqSection";
import { artist, prevJobs, testimonial, faq } from "../../data";
import { FaAngleRight } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa6";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import heroAboutImage from "../../img/home/heroAbt.webp";
import HomeWrapper from "./HomeWrapper";

function Home({ isToggle, toggleQuestion }) {
  const swiperRef = useRef(null);

  const handleMouseEnter = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.autoplay.stop();
    }
  };

  const handleMouseLeave = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.autoplay.start();
    }
  };

  return (
    <HomeWrapper>
      <section id="homeHero">
        <div className="heroContent">
          <span className="bgText tat">Tattoos </span>
          <span className="bgText pierce">Piercings</span>
        </div>

        <div className="container">
          <div className="heroText">
            <h1>Custom Tattoos & Exotic Piercings</h1>

            <p className="description">
              Here, you&apos;ll find the perfect blend of today&apos;s most
              popular culture and the rich history of tattoos.
            </p>

            <Link to="/appointment" className="btn">
              Book an appointment
              <span>
                <FaAngleRight />
              </span>
            </Link>
          </div>
        </div>
      </section>

      <section id="heroAbout">
        <div className="container">
          <div className="heroAboutContent">
            <div className="contentTop">
              <h2 className="head">About Us</h2>
              <p className="description">
                Pharoh Tattoos is a Blaise based tattoo studio and home to some
                of Blaise&apos;s best tattoo artists.
                <br />
                Our mission is to have everyone wearing their tattoos with pride
                and confidence. Tattoos are our business and to us business is
                personal.
              </p>

              <Link to="/about" className="btn">
                Learn More
                <span>
                  <FaAngleRight />
                </span>
              </Link>
            </div>

            <div className="contentBottom">
              <img src={heroAboutImage} alt="" />
            </div>
          </div>
        </div>
      </section>

      <section id="heroArtists">
        <div className="container">
          <div className="heroArtistsContent">
            <div className="contentTop">
              <h2 className="head">Artists</h2>
              <p className="description">
                Here are some of Blaise&apos;s best tattoo artists who&apos;ve
                spent hours honing their craft to perfection. We pour out our
                hearts into every tattoo.
              </p>
            </div>

            <div className="contentBottom">
              {artist.map((employees) => {
                const { id, name, img, style } = employees;
                return (
                  <div key={id} className="artistCard">
                    <img
                      src={img}
                      alt={`Image of artist ${name} of pharaoh tattoos`}
                    />

                    <div className="artistCardInfo">
                      <h3 className="title">{name}</h3>
                      <p className="style">{style}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section id="previousJobs">
        <div className="previousJobsContent">
          <div className="container top">
            <div className="contentTop">
              <h2 className="head">Previous Jobs</h2>
              <p className="description">
                Here are some jobs ( piercing and tattoos ) we&apos;ve concluded
                in the past. We&apos;re not limited to these!! How big your
                imagination/desire is can be drawn
              </p>
            </div>
          </div>

          <div className="contentBottom">
            {prevJobs.map((prevJobs) => {
              const { id, img } = prevJobs;
              return (
                <div key={id} className="prevJobs">
                  <img
                    src={img}
                    alt={`Image of artist ${name} of pharaoh tattoos`}
                  />
                </div>
              );
            })}
          </div>

          <div className="button">
            <a className="btn">
              Follow On Instagram
              <AiFillInstagram />
            </a>
          </div>
        </div>
      </section>

      <section id="testimonial">
        <div className="container">
          <div className="testimonialContent">
            <div className="contentTop">
              <h2 className="head">Testimonials</h2>
              <p className="description">
                1000 clients around Blaise Nation and here&apos;s what they have
                to say about us.
              </p>
            </div>

            <div
              className="contentBottom"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}>
              <FaQuoteLeft className="left" />

              <Swiper
                ref={swiperRef}
                pagination={{ clickable: true }}
                loop={true}
                autoplay={{ delay: 2500, disableOnInteraction: true }}
                grabCursor={true}
                modules={[Pagination, Autoplay]}
                className="testimonialSwiper mySwiper">
                {testimonial.map((item) => {
                  const { id, author, testimony } = item;
                  return (
                    <SwiperSlide key={id}>
                      <div className="testimony">
                        <p className="author">{author}</p>
                        <div className="testimonialNote">
                          <p className="description">{testimony}</p>
                        </div>
                      </div>
                    </SwiperSlide>
                  );
                })}
              </Swiper>

              <FaQuoteRight className="right" />
            </div>
          </div>
        </div>
      </section>

      <section id="faq">
        <div className="container">
          <div className="faqContent">
            <div className="contentTop">
              <h2 className="head">FAQ</h2>
              <p className="description">
                Here is a list of the most common questions we have received. If
                you have any more questions, please{" "}
                <Link
                  to="/contact"
                  style={{
                    borderBottom: ".1rem solid var(--primary)",
                    color: "var(--primary)",
                  }}>
                  contact us.
                </Link>
              </p>
            </div>

            <div className="contentBottom">
              {faq.map((item, index) => {
                const { faq1, faq2 } = item;
                return (
                  <div key={index} className="all">
                    <div className="firstFAQ">
                      <FAQSection
                        faqs={faq1}
                        isToggle={isToggle}
                        toggleQuestion={toggleQuestion}
                      />
                    </div>

                    <div className="secondFAQ">
                      <FAQSection
                        faqs={faq2}
                        isToggle={isToggle}
                        toggleQuestion={toggleQuestion}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </HomeWrapper>
  );
}

export default Home;
