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
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [address, setAddress] = useState("");

  const inputHandler = (value, name) => {
    switch (name) {
      case "Full Name":
        setFullName(value);
        break;
      case "Phone Number":
        setPhoneNumber(value);
        break;
      case "Birth Date":
        setBirthDate(value);
        break;
      case "Address":
        setAddress(value);
        break;
      default:
        break;
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log({
      fullName,
      phoneNumber,
      birthDate,
      address,
    });
  };
  return (
    <>
      <div className="service-header">
        <NavBar />
        <h1>REHAT Form</h1>
      </div>
      <div className="service-body">
        <form className="service-form" onSubmit={submitHandler}>
          {inputField.map((el) => {
            if (el === "Birth Date") {
              return (
                <>
                  <label for={el.toLowerCase().replace(" ", "-")}>{el}</label>
                  <input
                    type="date"
                    onChange={(e) => {
                      inputHandler(e.target.value, el);
                    }}
                  />
                </>
              );
            } else {
              return (
                <>
                  <label for={el.toLowerCase().replace(" ", "-")}>{el}</label>
                  <input
                    type="text"
                    onChange={(e) => {
                      inputHandler(e.target.value, el);
                    }}
                  />
                </>
              );
            }
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
