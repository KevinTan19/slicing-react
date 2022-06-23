import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Footer from "../components/footer";
import NavBar from "../components/navbar";
import LongCard from "../elements/card/long-card";
import useFetch from "../hooks/useFetch";

export default function ArticlePage() {
  const { data, isError, isLoading } = useFetch(
    "https://jsonplaceholder.typicode.com/posts/"
  );

  const [page, setPage] = useState(0);
  const [currentPage, setCurrentPage] = useState([]);
  const [totalPage, setTotalPage] = useState(0);

  const paginatonHandler = (num) => {
    setPage(num);
    setCurrentPage(data.slice(page * 10, (page + 1) * 10));
    window.scrollTo(0, 0);
  };

  //   const pageTransitionHandler = () => {
  //     setTotalPage(data.length / 10);
  //     setCurrentPage(data.slice(page * 10, (page + 1) * 10));
  //   };
  //   useEffect(() => {
  //     pageTransitionHandler();
  //   }, [pageTransitionHandler]);

  useEffect(() => {
    setTotalPage(data.length / 10);
    setCurrentPage(data.slice(page * 10, (page + 1) * 10));
  }, [data, page]);

  return (
    <>
      <NavBar />

      <div className="article-body">
        {isLoading && (
          <div className="spinner-container">
            <div className="loading-spinner"></div>
          </div>
        )}

        {/* {data.map((el) => {
          return <LongCard className="body-longcard-2" post={el} key={el.id} />;
        })} */}

        {currentPage.map((el) => {
          return <LongCard className="body-longcard-2" post={el} key={el.id} />;
        })}

        <ul className="pagination-list">
          {Array.from(Array(totalPage), (e, i) => {
            return (
              <li key={i}>
                <NavLink
                  to={"/articles/" + (i + 1)}
                  onClick={() => paginatonHandler(i)}
                >
                  {i + 1}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="home-footer">
        <Footer />
      </div>
    </>
  );
}
