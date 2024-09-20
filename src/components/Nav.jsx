import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { navIcon } from "../data";
import { FaAngleRight, FaXmark, FaBarsStaggered } from "react-icons/fa6";
import logo from "../img/logo.webp";

function Nav() {
  const [isMobile, setIsMobile] = useState(false);

  function showMobileMenu() {
    setIsMobile((prevIsMobile) => !prevIsMobile);
  }

  return (
    <header>
      <div className="container">
        <div className="headerContent">
          <Link to="/" className="logo">
            <img src={logo} alt="Image of Pharaoh Tattoo's logo" />
          </Link>

          <div className={isMobile ? "allLink active" : "allLink"}>
            <nav>
              <NavLink
                to="/"
                aria-label="View home page"
                className={({ isActive }) => (isActive ? "activeStyle" : null)}>
                Home
                <div className="underline"></div>
              </NavLink>

              <NavLink
                to="/gallery"
                aria-label="View gallery page"
                className={({ isActive }) => (isActive ? "activeStyle" : null)}>
                Gallery
              </NavLink>

              <NavLink
                to="/aftercare"
                aria-label="View aftercare page"
                className={({ isActive }) => (isActive ? "activeStyle" : null)}>
                After Care
              </NavLink>

              <NavLink
                to="/contact"
                aria-label="View contact page"
                className={({ isActive }) => (isActive ? "activeStyle" : null)}>
                Contact Us
              </NavLink>
            </nav>

            <div className="contact">
              <div className="social">
                {navIcon.map((icon) => {
                  const { id, icon: Icon, link } = icon;
                  return (
                    <a
                      key={id}
                      href={link}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="View TheBlaiseCode social page">
                      <Icon />
                    </a>
                  );
                })}
              </div>

              <NavLink
                to="/appointment"
                className={({ isActive }) =>
                  isActive ? "btn activeBtn" : "btn"
                }
                aria-label="Book an appointment">
                Appointment
                <span>
                  <FaAngleRight />
                </span>
              </NavLink>
            </div>
          </div>

          <button
            className="btn mobileNav"
            onClick={showMobileMenu}
            style={{ border: "none", marginTop: ".3rem", padding: "1rem" }}>
            {isMobile ? (
              <FaXmark
                className={isMobile ? "mobileActive active" : "mobileActive "}
              />
            ) : (
              <FaBarsStaggered />
            )}
          </button>
        </div>
      </div>
    </header>
  );
}

export default Nav;
