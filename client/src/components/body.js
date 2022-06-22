import { NavLink } from "react-router-dom";
import BodyCard from "../components/card/body-card";
import LongCard from "../components/card/long-card";
function Body() {
  return (
    <>
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
          "Anything that's human is mentionable,and anything that is mentionable
          can be more manageable. When we can talk about our feelings, the
          become less overhelming, less upsetting and less scary" --Fred Rogers
        </p>
        <p>
          Ready for our release?
          <span>
            <NavLink to="/services">Let's talk later</NavLink>
          </span>
        </p>
      </div>
    </>
  );
}

export default Body;
