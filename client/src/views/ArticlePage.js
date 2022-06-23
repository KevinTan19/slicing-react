import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import Footer from "../components/footer";
import NavBar from "../components/navbar";
import LongCard from "../elements/card/long-card";
import SpinnerLoading from "../elements/loading/spinner-loading";
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

  useEffect(() => {
    if (data.length === 0) {
      toast("Error");
    }
  }, []);

  return (
    <>
      <NavBar />

      <div className="article-body">
        {isLoading && <SpinnerLoading />}
        {isError && <ToastContainer />}
        {currentPage.map((el) => {
          return (
            <LongCard className="article-body-longcard" post={el} key={el.id} />
          );
        })}

        <ul className="pagination-list">
          {/* <li>
            <NavLink
              to={"/articles/" + (page - 1)}
              onClick={() => paginatonHandler(page - 1)}
            >
              «
            </NavLink>
          </li> */}
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
          {/* <li>
            <NavLink
              to={"/articles/" + (page + 1)}
              onClick={() => paginatonHandler(page + 1)}
            >
              »
            </NavLink>
          </li> */}
        </ul>
      </div>
      <div className="home-footer">
        <Footer />
      </div>
    </>
  );
}
