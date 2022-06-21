import { useState, useEffect } from "react";

function ReusableButton(props) {
  const [content, setContent] = useState("");

  useEffect(() => {
    if (props.className === "header-longcard") {
      setContent("Mulai Berselancar");
    }
    // eslint-disable-next-line
  }, []);

  return <button>{content}</button>;
}

export default ReusableButton;
