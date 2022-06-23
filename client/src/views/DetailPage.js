import { useParams } from "react-router-dom";
import Footer from "../components/footer";
import NavBar from "../components/navbar";
import SpinnerLoading from "../elements/loading/spinner-loading";
import useFetch from "../hooks/useFetch";

export default function DetailPage() {
  const { id } = useParams();
  const { data, isError, isLoading } = useFetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );

  return (
    <>
      <NavBar />
      <div className="detail-article-body">
        {isLoading && <SpinnerLoading />}
        <h1>{data.title}</h1>
        <p>{data.body}</p>
      </div>
      <div className="home-footer">
        <Footer />
      </div>
    </>
  );
}
