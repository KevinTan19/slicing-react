import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import HomePage from "./views/HomePage";
import ArticlePage from "./views/ArticlePage";
import DetailPage from "./views/DetailPage";
import ServicePage from "./views/ServicePage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/articles">
            <Route path="detail">
              <Route path=":id" element={<DetailPage />} />
            </Route>
            <Route path=":page" element={<ArticlePage />} />
          </Route>
          <Route path="/about" element={<HomePage />} />
          <Route path="/services" element={<ServicePage />} />
          <Route path="/contact" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
