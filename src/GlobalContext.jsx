import { createContext, useContext, useState, useEffect } from "react";

const GlobalUsage = createContext();

export const useGlobalContext = () => {
  return useContext(GlobalUsage);
};

function GlobalContext({ children }) {
  const [isToggle, setIsToggle] = useState(null);
  const [isModal, setIsModal] = useState(false);
  const [imgModal, setImgModal] = useState(false);
  const [appointmentType, setAppointmentType] = useState("Tattoos");
  const [backToTop, setBackToTop] = useState(false);

  // Function to toggle FAQ questions by ID
  function toggleQuestion(id) {
    setIsToggle(isToggle === id ? null : id);
  }

  // Function to toggle modal visibility
  function toggleModal() {
    setIsModal((prevIsModal) => !prevIsModal);
  }

  // Function to toggle image modal visibility
  function toggleImgModal() {
    setImgModal((prevImgModal) => !prevImgModal);
  }

  // Function to handle appointment form submission
  const bookAppointment = async ({ request }) => {
    const appointmentData = await request.formData();

    // Extract form data from the appointment form
    const submission = {
      fname: appointmentData.get("fname"),
      lname: appointmentData.get("lname"),
    };

    console.log("Form submitted:", submission);
  };

  // Function to handle appointment form submission
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 550) {
        setBackToTop(true);
      } else {
        setBackToTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <GlobalUsage.Provider
      value={{
        isToggle,
        toggleQuestion,
        isModal,
        toggleModal,
        imgModal,
        toggleImgModal,
        bookAppointment,
        appointmentType,
        setAppointmentType,
        backToTop,
        scrollToTop,
      }}>
      {children}
    </GlobalUsage.Provider>
  );
}

export default GlobalContext;
