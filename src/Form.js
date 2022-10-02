import React from "react";
import { useState } from "react";

const Form = () => {
  let [stdName, setName] = useState("");
  let [gender, setGender] = useState("");
  let [Gmail, setGmail] = useState("");
  let [Phone, setPhone] = useState("");
  let [Adress, setAdress] = useState("");

  let handelSubmit = (e) => {
    e.preventDefault();
    let newStd = { stdName, gender, Gmail, Phone, Adress };
    fetch("http://localhost:3008/student", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newStd),
    }).then(() => {
      alert("data is added");
    });
  };
  return (
    <div className="home-content">
        <div className=" heading">
        <h1>CONTACT FORM</h1>
        </div>
      <form className="contact-form" onSubmit={handelSubmit}>
        <div className="contact-field">
          <label>Name </label> <br />
          <input
            type="text"
            value={stdName}
            onChange={(e) => {
              setName(e.target.value);
            }}
            required
          />
        </div>
        <br />
        <div className="contact-field">
          <label>Gmail </label> <br />
          <input
            type="mail"
            value={Gmail}
            onChange={(e) => {
              setGmail(e.target.value);
            }}
            required
          />
        </div>
        <br />
        <div className="contact-field">
          <label>phone </label> <br />
          <input
            type="number"
            value={Phone}
            onChange={(e) => {
              setPhone(e.target.value);
            }}
            required
          />
        </div>
        <br />
        <div className="contact-field">
          <label>adress </label> <br />
          <input
            type="text"
            value={Adress}
            onChange={(e) => {
              setAdress(e.target.value);
            }}
            required
          />
        </div>
        <br />
        <fieldset className="fieldset">
          <legend align="center">Select your gender</legend>
          <input
            type="radio"
            name="gender"
            value="Male"
            onClick={(e) => {
              setGender(e.target.value);
            }}
          />{" "}
          <label>Male</label>
          <input
            type="radio"
            name="gender"
            value="Female"
            onClick={(e) => {
              setGender(e.target.value);
            }}
          />{" "}
          <label>Female</label>
          <input
            type="radio"
            name="gender"
            value="Others"
            onClick={(e) => {
              setGender(e.target.value);
            }}
          />{" "}
          <label>Others</label>
          <br />
        </fieldset>
        <input type="submit" />
      </form>
    </div>
  );
};

export default Form;
