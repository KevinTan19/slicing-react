import LongCard from "../components/card/long-card";
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
