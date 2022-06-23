import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./views/HomePage";
import ArticlePage from "./views/ArticlePage";
import DetailPage from "./views/DetailPage";

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
          <Route path="/services" element={<HomePage />} />
          <Route path="/contact" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
