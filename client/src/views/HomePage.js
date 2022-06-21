import LongCard from "../components/card/long-card";
import BodyCard from "../components/card/body-card";
import NavBar from "../components/navbar";
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
      </body>
      <footer className="home-footer">
        <h1>Footer</h1>
      </footer>
    </div>
  );
}

export default HomePage;
