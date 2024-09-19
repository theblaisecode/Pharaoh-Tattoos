import ContactForm from "../../components/ContactForm/ContactForm";
import ContactWrapper from "./ContactWrapper";

function Contact() {
  const sectionHead = "Contact Us";
  const sectionDescription =
    "We specialize in creating custom pieces but if you prefer, we have thousands of designs for you to choose from";

  return (
    <ContactWrapper>
      <div className="contact">
        <div className="contactContent">
          <div className="container">
            <ContactForm
              sectionHead={sectionHead}
              sectionDescription={sectionDescription}
            />
          </div>
        </div>

        <div className="contentBottom">
          <div className="map">
            <iframe
              width="100%"
              height="700"
              frameBorder="0"
              scrolling="no"
              marginHeight="0"
              marginWidth="0"
              src="https://maps.google.com/maps?width=100%25&amp;height=523&amp;hl=en&amp;q=Blaise%20Ave,%20Millsboro+(Pharaoh%20Tattoos)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
              <a href="https://www.gps.ie/">gps systems</a>
            </iframe>
          </div>
        </div>
      </div>
    </ContactWrapper>
  );
}

export default Contact;
