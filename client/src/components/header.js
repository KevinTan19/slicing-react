import LongCard from "../elements/card/long-card";
import NavBar from "../components/navbar";
function Header() {
  return (
    <>
      <NavBar />
      <LongCard className="header-longcard" />
    </>
  );
}

export default Header;
