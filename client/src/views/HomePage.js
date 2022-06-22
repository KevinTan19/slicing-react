import { NavLink } from "react-router-dom";
import LongCard from "../components/card/long-card";
import BodyCard from "../components/card/body-card";
import NavBar from "../components/navbar";
import CopyrightRehat from "../components/copyright/copyright-rehat";
function HomePage() {
  return (
    <div>
      <header className="home-header">
        <NavBar />
        <LongCard className="header-longcard" />
      </header>
      <body className="home-body">
        <div className="body-container-longcard">
          <LongCard className="body-longcard-1" />
          <LongCard className="body-longcard-2" />
        </div>
        <div className="body-container-card">
          <BodyCard className="body-card-1" />
          <BodyCard className="body-card-2" />
          <BodyCard className="body-card-3" />
        </div>
        <div className="container-quote">
          <h1>Good productivity with a good mentality</h1>
          <p>
            "Anything that's human is mentionable,and anything that is
            mentionable can be more manageable. When we can talk about our
            feelings, the become less overhelming, less upsetting and less
            scary" --Fred Rogers
          </p>
          <p>
            Ready for our release?
            <span>
              <NavLink to="/services">Let's talk later</NavLink>
            </span>
          </p>
        </div>
      </body>
      <footer className="home-footer">
        <div className="footer-container">
          <h4>Brought to you by REHAT</h4>
          <p>
            We are on mission to spread awareness of mental health and loves.
            The services that we will provide coming from people fretfulness.
          </p>
          <p>We are provide Rehat Center to keep our mission to be complete.</p>
          <img src="" alt="rehat-logo" />
          <CopyrightRehat />
        </div>
        <div className="footer-menu">
          <ul className="footer-link">
            <li>
              <NavLink to="/about">ABOUT</NavLink>
            </li>
            <li>
              <NavLink to="/services">BUSINESS MODEL</NavLink>
            </li>
            <li>
              <NavLink to="/contact">PRIVACY</NavLink>
            </li>
            <li>
              <NavLink to="/contact">TERM OF SERVICE</NavLink>
            </li>
            <li>
              <NavLink to="/contact">CONTACT</NavLink>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
}

export default HomePage;
