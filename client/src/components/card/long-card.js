import { useState, useEffect } from "react";
import ReusableButton from "../button/reusable-button";

function LongCard(props) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [img, setImg] = useState("");

  useEffect(() => {
    if (props.className === "header-longcard") {
      setTitle("Luangkan Waktu Sejenak");
      setContent(
        "Kesehatan mentalmu juga perlu perhatian sama seperti kesehatan tubuhmu"
      );
      setImg(
        "https://cdn.dribbble.com/users/1926014/screenshots/5661050/media/76cd03986b261982747e34c89f17d84e.png?compress=1&resize=400x300&vertical=top"
      );
    } else if (props.className === "body-longcard-1") {
      setTitle("Lelah, Burn Out,Cemas");
      setContent(
        `Jerih payah yang membuahkan hasil tidak luput dari dampak bagi kesehatan fisik dan mental. Tidak sedikit yang gagal mencapai tujuan hanya karena kena mentalnya`
      );
      setImg(
        "https://static.vecteezy.com/system/resources/previews/000/546/005/non_2x/cartoon-cute-summer-cat-sleeping-vector.jpg"
      );
    } else if (props.className === "body-longcard-2") {
      setTitle("Together we can recover your pain");
      setContent(
        "Saat workload atau beban belajar mudah untuk ditangani, siapapun akan lebih produktif. Yuk, cobain bagaimana caranya meringankan beban"
      );
      setImg(
        "https://as2.ftcdn.net/v2/jpg/02/69/15/47/1000_F_269154752_IU4Ub7UXy1mmQ8TdEYWbIlD4pKDd9NEH.jpg"
      );
    }
    // eslint-disable-next-line
  }, []);
  return (
    <div className="container-longcard">
      <div className="home-container">
        <h1 className="home-title">{title}</h1>
        <p>{content}</p>
        {props.className === "header-longcard" && (
          <ReusableButton className={props.className} />
        )}
      </div>
      <img src={img} alt="cat-relax" className="home-img"></img>
    </div>
  );
}

export default LongCard;
