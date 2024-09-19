import { Link } from "react-router-dom";
import logo from "../img/logo.png";
import { footerIcon, footerContent } from "../data";

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footerContent">
          <div className="contentTop">
            <Link to="/" className="logo">
              <img src={logo} alt="Image of Pharaoh Tattoo's logo" />
            </Link>

            <div className="social">
              {footerIcon.map((icon) => {
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
          </div>

          <div className="contentBottom">
            {footerContent.map((item) => {
              const { id, title, details, details2 } = item;
              return (
                <div key={id} className="">
                  <p className="title">{title}</p>

                  <div className="details">
                    <p>
                      {details.info1}
                      <span>{details.info2}</span>
                    </p>
                    <p>
                      {details2.info3}
                      <span>{details2.info4}</span>
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
