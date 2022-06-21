import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <nav className="navbar">
      <p className="nav-logo">
        <NavLink to="/">REHAT</NavLink>
      </p>
      <ul className="nav-link">
        <li>
          <NavLink to="/services">Layanan Kami</NavLink>
        </li>
        <li>
          <NavLink to="/about">Tentang</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Kontak</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
