import {useState, useEffect, useContext} from 'react'
import "./App.css"
import ApiDatas from "./Components/ApiDatas"

const App = () => {
  
  const Add = (e) => {
    //console.log(document.getElementById("Date").value)
    fetch("http://localhost:8000/api/CreateEvent/", {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(
        `{
          {
            "date": ${document.getElementById("Date").value},
            "milage": ${documnet.getElementById("Milage").value},
            "description": ${document.getElementById("Description").value},
            "price": ${document.getElementById("Price").value}
          }
        }`
      )
    })
  }

  return (
    <div className='App'>
     <form className="new-item-form">
      <h1 htmlFor="">New Log</h1>
      <div className="form-row">
        
        <input type="number" name='Mileage' id='Mileage' placeholder='Mileage' /> 
        <input type="text" name='Description' id="Description" placeholder='Description'/>
        <input type="number" name="Price" id="Price" placeholder='Price' />
        <input type="date" name='Date' id="Date" placeholder='Date' />
        <input type="number" name="Quantity" id="Quantity" placeholder='Quantity'/>
        <input type="text" name="GasStationType" id='GasStationType' placeholder='GasStationType'/>
        <br />
        <button id='AddButton' onClick={Add}>Add</button>
      </div>
      </form>
      <div>
        <ApiDatas/>
      </div>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet"></link>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"></script>

    </div>
  )

}




export default App