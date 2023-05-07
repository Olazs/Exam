import React from "react";
import { useEffect, useState } from "react";

function GetData({data, fetchData}) {

    useEffect(() => {
      fetchData();
    }, []);

    
  const Remove = (id) => {
    console.log(id)
    fetch("http://localhost:8000/api/DeleteEvent/" + id, {
      method: 'DELETE',
      headers: {
        "access-control-allow-origin": "*",
        'Access-Control-Allow-Headers': 'Content-Type, Authorization',
        'Access-Control-Allow-Methods': '*',
      }
    }).then(()=>{
      fetchData()
    })
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
              <button className="btn btn-danger" id="RemoveButton" onClick={()=>{Remove(item.id)}}>Remove</button>
            </td>
          </tr>
        ))}
      </tbody>
      </table>
    </div>
  )

}
export default GetData;