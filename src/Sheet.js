import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import React from "react";
const Sheet = () => {
  const [data, setData] = useState();
  useEffect(() => {
    fetch("http://localhost:3008/student")
      .then((response) => {
        return response.json();
      })
      .then((fetchedData) => {
        setData(fetchedData);
      });
  }, []);
  return (
    <div className="table-box">
      {data && 
        <table className="tabl" border="2px">
          <tr>
            <th>SL NO</th>
            <th>DETAILS</th>
            <th>GENDER</th>
            <th>GMAIL</th>
            <th>phone</th>
            <th>adress</th>
            <th>view</th>
            <th>edit</th>
          </tr>
          {              
          data.map((student)=>(
          <tr key={student.id}>
            <td>{student.id}</td>
            <td>{student.stdName}</td>
            <td>{student.gender}</td>
            <td>{student.Gmail}</td>
            <td>{student.Phone}</td>
            <td>{student.Adress}</td>
            <td><Link to={`/details${student.id}`}>view</Link></td>
          </tr>
          ))
        }
        </table>
      }
    </div>
  );
};

export default Sheet;




