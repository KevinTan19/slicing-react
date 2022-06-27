import { useState } from "react";
import NavBar from "../components/navbar";
import Footer from "../components/footer";

export default function ServicePage() {
  const [inputField, setInputField] = useState([
    "Full Name",
    "Phone Number",
    "Birth Date",
    "Address",
  ]);
  return (
    <>
      <div className="service-header">
        <NavBar />
        <h1>REHAT Form</h1>
      </div>
      <div className="service-body">
        <form className="service-form">
          {inputField.map((el) => {
            return (
              <>
                <label for={el.toLowerCase().replace(" ", "-")}>{el}</label>
                <input type="text" />
              </>
            );
          })}
          <button type="submit">Submit</button>
        </form>
      </div>
      <div className="home-footer">
        <Footer />
      </div>
    </>
  );
}
