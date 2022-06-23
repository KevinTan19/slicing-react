import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

function ReusableButton(props) {
  const [content, setContent] = useState("");
  const [destination, setDestination] = useState("");

  useEffect(() => {
    if (props.className === "header-longcard") {
      setContent("Mulai Berselancar");
      setDestination("/articles/1");
    } else if (props.className === "article-body-longcard") {
      setContent("Read More...");
      setDestination(`/articles/detail/${props.articleId}`);
    }
    // eslint-disable-next-line
  }, []);

  return (
    <button>
      <NavLink to={destination}>{content}</NavLink>
    </button>
  );
}

export default ReusableButton;
