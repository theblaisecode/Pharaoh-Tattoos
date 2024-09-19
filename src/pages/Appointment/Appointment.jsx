import { Form } from "react-router-dom";
import { FaAngleRight } from "react-icons/fa6";
import HeadingTop from "../../components/HeadingTop";
import formImage from "../../img/appointment/formImage.png";
import { tattooOptions, piercingOptions, artist } from "../../data";
import AppointmentWrapper from "./AppointmentWrapper";

function Appointment({ appointmentType, setAppointmentType }) {
  const head = "Booking Form";
  const description =
    "Thank you for your interest. If you do not have a link to the reference pictures, please send an email to pharaohtattoos@gmail.com, attaching the reference pictures after completing the form.";

  return (
    <AppointmentWrapper>
      <div className="appointment">
        <div className="container">
          <div className="appointmentContent">
            <HeadingTop head={head} description={description} />

            <div className="contentBottom">
              <div className="contact">
                <p className="head2">Call: +234 812 345 6789</p>
                <p className="head2">Email: pharohtattoos@gmail.com</p>
              </div>

              <div className="formContainer">
                <div className="formImg">
                  <img
                    src={formImage}
                    alt="Image of a tattoo artist in a tattoo parlour preparing for a tattoo appointment"
                  />
                </div>

                <Form method="POST" action="/appointment">
                  <div className="clientDetails">
                    <div className="firstName">
                      <label htmlFor="fname">First Name</label>
                      <input type="text" name="fname" id="fname" />
                    </div>

                    <div className="lastName">
                      <label htmlFor="lname">Last Name</label>
                      <input type="text" name="lname" id="lname" />
                    </div>
                  </div>

                  <div className="clientDetails">
                    <div className="phone">
                      <label htmlFor="phone">Phone</label>
                      <div className="phoneInputWrapper">
                        <input
                          type="text"
                          name="countryCode"
                          id="countryCode"
                          style={{ width: "9rem" }}
                        />

                        <input type="tel" name="phone" id="phone" />
                      </div>
                    </div>

                    <div className="email">
                      <label htmlFor="email">Email</label>
                      <input type="email" name="email" id="email" />
                    </div>
                  </div>

                  <div className="clientDetails">
                    <div className="appointmentType">
                      <label htmlFor="appointmentType">Appointment Type</label>
                      <select
                        name="appointmentType"
                        id="appointmentType"
                        value={appointmentType}
                        onChange={(e) => setAppointmentType(e.target.value)}>
                        <option value="Tattoos">Tattoos</option>
                        <option value="Piercings">Piercings</option>
                      </select>
                    </div>

                    <div className="placement">
                      <label htmlFor="placement">Placement</label>
                      <select name="placement" id="placement">
                        {appointmentType === "Tattoos"
                          ? tattooOptions.map((option) => (
                              <option key={option} value={option}>
                                {option}
                              </option>
                            ))
                          : piercingOptions.map((option) => (
                              <option key={option} value={option}>
                                {option}
                              </option>
                            ))}
                      </select>
                    </div>
                  </div>

                  <div className="clientDetails">
                    <div className="preferredDate">
                      <label htmlFor="preferredDate">Preferred Date</label>
                      <input
                        type="date"
                        name="preferredDate"
                        id="preferredDate"
                      />
                    </div>

                    <div className="preferredTime">
                      <label htmlFor="preferredTime">Preferred Time</label>
                      <input
                        type="time"
                        name="preferredTime"
                        id="preferredTime"
                      />
                    </div>

                    <div className="artist">
                      <label htmlFor="artist">Artist</label>
                      <select name="artist" id="artist">
                        {artist
                          .filter((option) =>
                            appointmentType === "Piercings"
                              ? option.style.toLowerCase().includes("piercing")
                              : !option.style.toLowerCase().includes("piercing")
                          )
                          .map((option) => {
                            const { id, name } = option;
                            return (
                              <option key={id} value={name}>
                                {name}
                              </option>
                            );
                          })}
                      </select>
                    </div>
                  </div>

                  <div className="clientDetails">
                    <div className="skinConcition">
                      <label htmlFor="skinConcition">
                        Skin Condition :
                        <span> If none, please type - none</span>
                      </label>
                      <input
                        type="text"
                        name="skinConcition"
                        id="skinConcition"
                      />
                    </div>
                  </div>

                  <div className="clientDetails">
                    <div className="reference">
                      <label htmlFor="reference">Link to reference image</label>
                      <input type="text" name="reference" id="reference" />
                    </div>
                  </div>

                  <div className="clientDetails">
                    <div className="moreInfo">
                      <label htmlFor="moreInfo">
                        Description :
                        <span>
                          {" "}
                          Include any additional information you may have here
                        </span>
                      </label>
                      <textarea name="moreInfo" id="moreInfo"></textarea>
                    </div>
                  </div>

                  <button type="submit" className="btn">
                    Submit
                    <span>
                      <FaAngleRight />
                    </span>
                  </button>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AppointmentWrapper>
  );
}

export default Appointment;