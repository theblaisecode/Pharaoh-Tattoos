import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home/Home";
import Gallery from "./pages/Gallery/Gallery";
import Aftercare from "./pages/Aftercare/Aftercare";
import Contact from "./pages/Contact/Contact";
import Appointment from "./pages/Appointment/Appointment";
import { useGlobalContext } from "./GlobalContext";
import Layout from "./components/Layout";

function App() {
  const {
    isToggle,
    toggleQuestion,
    isModal,
    toggleModal,
    imgModal,
    toggleImgModal,
    bookAppointment,
    appointmentType,
    setAppointmentType,
  } = useGlobalContext();

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Home isToggle={isToggle} toggleQuestion={toggleQuestion} />,
        },
        {
          path: "gallery",
          element: (
            <Gallery
              isModal={isModal}
              toggleModal={toggleModal}
              imgModal={imgModal}
              toggleImgModal={toggleImgModal}
            />
          ),
        },
        {
          path: "aftercare",
          element: <Aftercare />,
        },
        {
          path: "contact",
          element: <Contact />,
        },
        {
          path: "appointment",
          element: (
            <Appointment
              appointmentType={appointmentType}
              setAppointmentType={setAppointmentType}
            />
          ),
          action: bookAppointment,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
