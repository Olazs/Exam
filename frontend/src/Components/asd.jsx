import React, { useState } from "react";

const [asd, setAsd] = useState([]);

class GetApiDatas extends React.Component {

  constructor(props){
      super(props)
      this.state = {
          list: []
      }

      this.callAPI = this.callAPI.bind(this)
      this.callAPI();
  }

  callAPI() {
      fetch("http://localhost:8000/api/GetAllEvents").then(
          (response) => response.json()
      ).then((data) => {
          console.log(data)
          this.state([])
          this.setState({
              list:data.data
          })
      })
  }

  render() {
      let tableData = this.state.list.map((item) => {
          return(
              <tr key={item.id}>
                  <td>{item.milage}</td>
                  <td>{item.date}</td>
                  <td>{item.description}</td>
                  <td>{item.price}</td>
                  <td>
                      <button className='btn btn-danger'>Remove</button>
                  </td>
              </tr>
          )
      })
      return(
          <div className='container'>
              <table className='table table-striped'>
                  <thead>
                      <tr>
                          <th>Milage</th>
                          <th>Date</th>
                          <th>Description</th>
                          <th>Price</th>
                      </tr>
                  </thead>
                  <tbody>
                      {tableData}
                  </tbody>
              </table>
          </div>
      )
  }
}


handleSubmit = async (event) => {
    event.preventDefault()
  
    // extract form data
    const formdata = new FormData(event.target)
  
    // convert FormData to json object
    // SOURCE: https://stackoverflow.com/a/46774073
    const json = {}
    formdata.forEach(function(value, prop){
      json[prop] = value
    })
  
    // convert json to urlencoded query string
    // SOURCE: https://stackoverflow.com/a/37562814 (comments)
    const formBody = Object.keys(json).map(key => encodeURIComponent(key) + '=' + encodeURIComponent(json[key])).join('&')
  
    // POST the request to Staticman's API endpoint
    const response = await fetch("http://localhost:8000/api/CreateEvent/", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: formBody,
    })
      .then(response => {
        // reset form
        document.getElementById("mileage").reset()
        // display success message
        document.getElementById("success").style.display = "block"
      })
      .catch(error => {
        console.log(error)
        document.getElementById("failure").style.display = "block"
      })
  }

  function Add() {
    const [date, setDate] = useState("");
    const [mileage, setMileage] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
  
    let handleSubmit = async (e) => {
      e.preventDefault();
      try {
        let res = await fetch("https://httpbin.org/post", {
          method: "POST",
          body: JSON.stringify({
            date: date,
            mileage: mileage,
            price: price,
          }),
        });
        let resJson = await res.json();
        if (res.status === 200) {
          setDate("");
          setmileage("");
          setDescription("User created successfully");
        } else {
          setMessage("Some error occured");
        }
      } catch (err) {
        console.log(err);
      }
    };

    var form_data = new FormData(document.getElementById("my-awesome-dropzone"));


export default GetApiDatas
