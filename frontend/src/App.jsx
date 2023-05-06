import {useState, useEffect, useContext} from 'react'
import "./App.css"
import ApiDatas from "./Components/ApiDatas"




const App = () => {
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
        <input type="button" value="Add" id='AddButton'/>
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