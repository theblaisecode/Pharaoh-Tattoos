import Nav from "./Nav";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";

function Layout() {
  const thisYear = new Date();

  console.log(thisYear.getFullYear());
  return (
    <>
      <Nav />
      <Outlet />
      <Footer />

      <footer id="subFooter">
        <div className="container">
          <div className="subFooterContent">
            <span>
              &copy; <span id="year">{thisYear.getFullYear()}</span> Pharaoh
              Tattoos
            </span>

            <div className="authors">
              <span>
                Designer: TeddyTheCreator
                <br />
                Twitter:
                <a href="https://x.com/Teddy_016" target="_blank">
                  @Teddy_016
                </a>
              </span>

              <span className="divide"></span>

              <span>
                Developer: TheBlaiseCode
                <br />
                Twitter:
                <a href="https://x.com/theblaisecode" target="_blank">
                  @theblaisecode
                </a>
              </span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Layout;
