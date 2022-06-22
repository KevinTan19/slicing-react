import { NavLink } from "react-router-dom";
import CopyrightRehat from "./copyright/copyright-rehat";

function Footer() {
  return (
    <>
      <div className="footer-container">
        <h4>Brought to you by REHAT</h4>
        <p>
          We are on mission to spread awareness of mental health and loves. The
          services that we will provide coming from people fretfulness.
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
    </>
  );
}

export default Footer;
