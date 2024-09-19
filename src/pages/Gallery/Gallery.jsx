import PageHero from "../../components/PageHero";
import GalleryWrapper from "./GalleryWrapper";
import GalleryComp from "../../components/GalleryComp";
import ContactForm from "../../components/ContactForm/ContactForm";

function Gallery({ isModal, toggleModal, imgModal, toggleImgModal }) {
  const galleryHero = "galleryHero";
  const piercingsHero = "piercingsHero";

  const sectionHead = "Placements";
  const sectionDescription =
    "We offer tattoo placements and piercings on every part of the body, due to privacy reasons we can't post some jobs, due to where clients had them. So book an appointment regardless of where you want it done";

  return (
    <GalleryWrapper>
      <PageHero galleryHero={galleryHero} bgText={"Tattoos"} />

      <section id="artstyle">
        <div className="artstyleContent">
          <GalleryComp
            style={"illustrative"}
            prevWork={"illustrative"}
            isModal={isModal}
            toggleModal={toggleModal}
            imgModal={imgModal}
            toggleImgModal={toggleImgModal}
          />
          <GalleryComp
            style={"rmr"}
            prevWork={"rmr"}
            isModal={isModal}
            toggleModal={toggleModal}
            imgModal={imgModal}
            toggleImgModal={toggleImgModal}
          />
          <GalleryComp
            style={"taj"}
            prevWork={"taj"}
            isModal={isModal}
            toggleModal={toggleModal}
            imgModal={imgModal}
            toggleImgModal={toggleImgModal}
          />
          <GalleryComp
            style={"fineline"}
            prevWork={"fineline"}
            isModal={isModal}
            toggleModal={toggleModal}
            imgModal={imgModal}
            toggleImgModal={toggleImgModal}
          />
          <PageHero galleryHero={piercingsHero} bgText={"Piercing"} />
          <GalleryComp
            style={"piercings"}
            prevWork={"piercing"}
            isModal={isModal}
            toggleModal={toggleModal}
            imgModal={imgModal}
            toggleImgModal={toggleImgModal}
          />
        </div>
      </section>

      <section id="contact">
        <div className="container">
          <div className="contactContent">
            <ContactForm
              sectionHead={sectionHead}
              sectionDescription={sectionDescription}
            />
          </div>
        </div>
      </section>
    </GalleryWrapper>
  );
}

export default Gallery;
