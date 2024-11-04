import HeadingTop from "../HeadingTop";
import { IoMail } from "react-icons/io5";
import { TbUserFilled } from "react-icons/tb";
import { HiPaintBrush } from "react-icons/hi2";
import ContactFormWrapper from "./ContactFormWrapper";
import Button from "../Button";
import { Form } from "react-router-dom";
import { toast } from "react-toastify";
import emailjs from "emailjs-com";

function ContactForm({ sectionHead, sectionDescription }) {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_eqa2bwo",
        "template_89texri",
        e.target,
        "ykYQxpSvmEm_6kHaM"
      )
      .then(
        (result) => {
          toast.success("Email sent!", {});
          e.target.reset();
        },
        (error) => {
          toast.error("Failed to send email. Please try again.", {});
        }
      );
  };

  return (
    <ContactFormWrapper>
      <div id="contactForm">
        <div className="contactFormContent">
          <HeadingTop head={sectionHead} description={sectionDescription} />
          <div className="contentBottom">
            <Form onSubmit={sendEmail}>
              <div className="formInfo">
                <div className="name">
                  <TbUserFilled />
                  <input
                    type="text"
                    name="from_name"
                    id="name"
                    placeholder="Name"
                    required
                  />
                </div>
                
                <div className="email">
                  <IoMail />
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email"
                    required
                  />
                </div>
              </div>

              <div className="formMessage">
                <div className="message">
                  <HiPaintBrush />
                  <textarea
                    name="message"
                    id="message"
                    placeholder="Message"
                    required></textarea>
                </div>
              </div>

              <div className="buttons">
                <Button buttonText="Submit" />
              </div>
            </Form>
          </div>
        </div>
      </div>
    </ContactFormWrapper>
  );
}

export default ContactForm;
