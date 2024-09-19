import { useRef } from "react";
import { FaXmark } from "react-icons/fa6";
import { galleryWorks, galleryHeadings } from "../headingsData";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import Button from "./Button";

function GalleryComp({
  style,
  prevWork,
  isModal,
  toggleModal,
  imgModal,
  toggleImgModal,
}) {
  const heading = galleryHeadings.find((item) => item.tag === style);
  const styleWorks = galleryWorks.flatMap((group) =>
    group.works.filter((work) => work.tag === prevWork)
  );

  const { id, head, description } = heading;
  const swiperRef = useRef(null);

  return (
    <div key={id} className="artStyles">
      <div className="contentTop">
        <h2 className="head">{head}</h2>
        <p className="description">{description}</p>
      </div>

      <div className="contentBottom">
        {styleWorks.map(({ id, img, name, time, artist }) => (
          <div key={id} className="work">
            <div className="imgDetails" onClick={() => toggleImgModal()}>
              <img src={img} className="workImage" alt={`Image of ${name}`} />

              <div className="text">
                <p>{artist}</p>
                <span>{time}</span>
              </div>
            </div>

            <div className={!imgModal ? "imgContent" : "imgContent active"}>
              <div className="imgCard">
                <button onClick={() => toggleImgModal()}>
                  <FaXmark />
                </button>

                <div className="imgModalInfo">
                  <Swiper
                    ref={swiperRef}
                    slidesPerView={1}
                    spaceBetween={40}
                    centeredSlides={true}
                    loop={true}
                    pagination={{
                      type: "fraction",
                    }}
                    navigation={true}
                    grabCursor={true}
                    modules={[Pagination, Navigation]}
                    className="mySwiper imgModalSwiper">
                    {galleryWorks.map((gallery) =>
                      gallery.works.map(({ id, img, name, time, artist }) => (
                        <>
                          <SwiperSlide key={id}>
                            <img src={img} alt={`Image of ${name}`} />
                            <div className="text">
                              <p>
                                Artist: <span>{artist}</span>
                              </p>
                              <p>
                                Timeframe: <span>{time}</span>
                              </p>
                            </div>
                          </SwiperSlide>
                        </>
                      ))
                    )}
                  </Swiper>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="viewMore">
        <Button buttonText="View More" buttonFunction={toggleModal} />

        <div className={isModal ? "modalContent active" : "modalContent"}>
          <div className="modalCard">
            <button onClick={() => toggleModal()}>
              <FaXmark />
            </button>

            <div className="modalInfo">
              <div key={id} className="artStyles">
                <div className="contentTop">
                  <h2 className="head">{head}</h2>
                  <p className="description">{description}</p>
                </div>

                <div className="contentBottom">
                  {galleryWorks.map((gallery) => {
                    return gallery.works.map(
                      ({ id, img, name, time, artist }) => (
                        <div
                          key={id}
                          className="imgDetails"
                          onClick={() => toggleImgModal()}>
                          <img
                            src={img}
                            className="workImage"
                            alt={`Image of ${name}`}
                          />

                          <div className="text">
                            <p>{artist}</p>
                            <span>{time}</span>
                          </div>
                        </div>
                      )
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GalleryComp;
