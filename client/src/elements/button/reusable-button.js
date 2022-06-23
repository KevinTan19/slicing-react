import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

function ReusableButton(props) {
  const [content, setContent] = useState("");

  useEffect(() => {
    if (props.className === "header-longcard") {
      setContent("Mulai Berselancar");
    }
    // eslint-disable-next-line
  }, []);

  return (
    <button>
      <NavLink to="/articles/1">{content}</NavLink>
    </button>
  );
}

export default ReusableButton;
