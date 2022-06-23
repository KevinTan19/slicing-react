import { useState, useEffect } from "react";
function BodyCard(props) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [img, setImg] = useState("");

  useEffect(() => {
    if (props.className === "body-card-1") {
      setTitle("Meditation");
      setContent("Meditasi membantu tubuh dan pikirkan lebih segar");
      setImg(
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsEUOl5lMW7GAFyX1RafabaTByLfLV9Kgf0kLsbeKNCIXTlqdnJIQDN5WiWnEqy0RRhPI&usqp=CAU"
      );
    } else if (props.className === "body-card-2") {
      setTitle("Relaxation");
      setContent("Relaksasi merupakan cara paling ringan untuk melepas penat");
      setImg(
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReGvbWA6qNFBPZagagRyO9NO6Ett7Bp3VrkrRFrTNwQZZfnQ7e7WcZklKsozdKbnYg25I&usqp=CAU"
      );
    } else if (props.className === "body-card-3") {
      setTitle("Consultation");
      setContent(
        "Ketika metode rungan kurang membantu, para psikolog bisa membantu melalui konsultasi"
      );
      setImg(
        "https://cdn4.vectorstock.com/i/1000x1000/35/73/cartoon-cute-summer-cat-travel-vector-25553573.jpg"
      );
    }

    // eslint-disable-next-line
  }, []);
  return (
    <div className="body-card">
      <img src={img} alt="card-img" className="card-img" />
      <div className="container-card">
        <h4>
          <b>{title}</b>
        </h4>
        <p>{content}</p>
      </div>
    </div>
  );
}

export default BodyCard;
