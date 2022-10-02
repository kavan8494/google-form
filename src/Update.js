import React, { useEffect } from "react";
import {useState} from "react";
import {useHistory,useParams } from "react-router-dom";

const update = () => {
    let {id}=useParams();
    let History= useHistory();
  let [stdName, setName] = useState("");
  let [gender, setGender] = useState("");
  let [Gmail, setGmail] = useState("");
  let [Phone, setPhone] = useState("");
  let [Adress, setAdress] = useState("");

useEffect(()=>{
    fetch("http://localhost:3008/student/"+id)
    .then((Response)=>{ return Response.json()})
    .then((exstd)=>{setName(exstd.stdName)
        setGender(exstd.gender)
        setGmail(exstd.Gmail)
        setPhone(exstd.Phone)
        setAdress(exstd.Adress)})
},[])

  let handleupdate = (e) => {
    e.preventDefault();
    let newStd = { stdName, gender, Gmail, Phone, Adress };
    fetch("http://localhost:3008/student/"+id, {
      method: "PUT",
      headers: {  "ACCEPT":"application/json" ,"Content-Type": "application/json" },
      body: JSON.stringify(newStd),
    }).then(() => {
      alert("data is updated");
    })
  };
  return (
    <div className="home-content">
      <form onSubmit={handleupdate}>
        <label>Name : </label>{" "}
        <input
          type="text"
          value={stdName}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <br />
        <label>Gmail : </label>{" "}
        <input
          type="mail"
          value={Gmail}
          onChange={(e) => {
            setGmail(e.target.value);
          }}
        />
        <br />
        <label>phone : </label>{" "}
        <input
          type="number"
          value={Phone}
          onChange={(e) => {
            setPhone(e.target.value);
          }}
        />
        <br />
        <label>adress : </label>{" "}
        <input
          type="text"
          value={Adress}
          onChange={(e) => {
            setAdress(e.target.value);
          }}
        />
        <br />
        <fieldset>
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
        <input type="submit"/>
      </form>
    </div>
  );
};

export default update;
