import React from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";
const Signup = () => {
    let History=useHistory();
    let [username,setusername]=useState("");
    let [email,setemail]=useState("");
    let [password,setpassword]=useState("");
    let handelSubmit =(e)=>{
        e.preventDefault();
        let newdet={username,email,password}
fetch(" http://localhost:3009/login"  , {
    method:"POST",
    headers: {"Content-Type":"Application/json"},
    body:JSON.stringify(newdet)
}).then(()=>{alert("data is added")})
.then(()=>{setusername("") && setemail("") && setpassword("")})
.then(()=>{
    History.push("/Home")
})
    }

    return ( <div className="form">
        <h1>WELCOME TO GOOGLE FORMS</h1>
        <form className="form-box">
            <h1>SIGN UP FORM</h1>
            <div className="field">
                <label>USERNAME</label><br/>
                <input type="text" name="username" placeholder="username" value={username} onChange={(e)=>{setusername(e.target.value)}}/>
            </div>
            <div className="field">
                <label  >EMAIL</label><br/>
                <input type="EMAIL" name="EMAIL" placeholder="EMAIL" value={email} onChange={(e)=>{setemail(e.target.value)}}/>
            </div>
            <div className="field">
                <label>PASSWORD</label><br/>
                <input type="PASSWORD" name="PASSWORD" placeholder="PASSWORD" value={password} onChange={(e)=>{setpassword(e.target.value)}}/>
            </div>

            <button onClick={handelSubmit}>SUBMIT</button>
        </form>
    </div> );
}
 
export default Signup;