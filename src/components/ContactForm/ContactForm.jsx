import HeadingTop from "../HeadingTop";
import { IoMail } from "react-icons/io5";
import { TbUserFilled } from "react-icons/tb";
import { HiPaintBrush } from "react-icons/hi2";
import ContactFormWrapper from "./ContactFormWrapper";
import Button from "../Button";
// import { Form } from "react-router-dom";

function ContactForm({ sectionHead, sectionDescription }) {
  return (
    <ContactFormWrapper>
      <div id="contactForm">
        <div className="contactFormContent">
          <HeadingTop head={sectionHead} description={sectionDescription} />

          <div className="contentBottom">
            <form action="">
              <div className="formInfo">
                <div className="name">
                  <TbUserFilled />
                  <input type="text" name="name" id="name" placeholder="Name" />
                </div>

                <div className="email">
                  <IoMail />
                  <input
                    type="text"
                    name="email"
                    id="email"
                    placeholder="Email"
                  />
                </div>
              </div>

              <div className="formMessage">
                <div className="message">
                  <HiPaintBrush />
                  <textarea
                    name="message"
                    id="message"
                    placeholder="Message"></textarea>
                </div>
              </div>

              <div className="buttons">
                <Button buttonText="Submit" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </ContactFormWrapper>
  );
}

export default ContactForm;