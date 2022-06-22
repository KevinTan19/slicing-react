import Body from "../components/body";
import Footer from "../components/footer";
import Header from "../components/header";
function HomePage() {
  return (
    <>
      <div className="home-header">
        <Header />
      </div>
      <div className="home-body">
        <Body />
      </div>
      <div className="home-footer">
        <Footer />
      </div>
    </>
  );
}

export default HomePage;
