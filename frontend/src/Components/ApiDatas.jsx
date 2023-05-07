import React from "react";
import { useEffect, useState } from "react";
import App from ".././App"

function GetData() {
  const [data, setData] = useState([]);

    useEffect(() => {
      fetchData();
    }, []);
  const fetchData = () => {
    fetch("http://localhost:8000/api/GetAllEvents/")
      .then(response => response.json())
      .then(actualData => setData(actualData))
      .catch((err) => {
        console.log(err.message);
      });
  };


  const Remove = () => {
    var index = RemoveButton.value*1
    console.log(index)
    fetch("http://localhost:8000/api/DeleteEvent/" + index, {
      method: 'DELETE'
    })
    window.location.reload(false)
  }
  
  
  return (
    <div className="GetData">
      <table className="table table-striped">
      <tbody className="Table-list">
        <tr>
          <th>Date</th>
          <th>Mileage</th>
          <th>Description</th>
          <th>Price</th>
          <th></th>
        </tr>
        {data?.map((item, idx) => (
          <tr key={idx}>
            <td>{item.date}</td>
            <td>{item.mileage}</td>
            <td>{item.description}</td>
            <td>{item.price}</td>
            <td>
              <button className="btn btn-danger" id="RemoveButton" value={item.id} onClick={Remove}>Remove</button>
            </td>
          </tr>
        ))}
      </tbody>
      </table>
    </div>
  )

}
export default GetData;