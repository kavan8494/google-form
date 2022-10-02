import React, { useState } from "react";
import { useParams,useHistory,Link } from "react-router-dom";

const Details = () => {
    let {id}= useParams();
    let History=useHistory();
    let [studentData, setstudentData]=useState(null);
    fetch(" http://localhost:3008/student/"+id)
    .then((Response)=>{
        return  Response.json();
    })
    .then((fetchedData)=>{ setstudentData(fetchedData)})
    const handleDelete=(deleteId)=>{
        fetch(`http://localhost:3008/student/${deleteId}`,
        {method:"DELETE"})
        .then(()=>{
            History.push("/sheet")
        })
    }
    return ( <div className="details-box">
        {
            studentData && <div>
                <h1>NAME: {studentData.stdName}</h1>
            <h1>GENDER: {studentData.gender}</h1>
            <h1>GMAIL: {studentData.Gmail}</h1>
            <h1>PHONE: {studentData.Phone}</h1>
            <h1>ADRESS: {studentData.Adress}</h1>
            <button onClick={()=>{handleDelete(studentData.id)}} >delete</button>
            <td><Link to={`/update${studentData.id}`}> EDIT </Link></td>

            </div>
        }   
    </div> );
}
 
export default Details;