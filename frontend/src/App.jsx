import React from 'react'
//import "./styles.css"
import "./App.css"

const App = () => {
  return (
    <div className='App'>
     <form className="new-item-form">
      <h1 htmlFor="">New Log</h1>
      <div className="form-row">
        
        <input type="number" name='Mileage' id='Mileage' placeholder='Mileage' /> 
        <input type="text" name='Description' id="Description" placeholder='Description'/>
        <input type="number" name="Price" id="Price" placeholder='Price' />
        <input type="text" name='Date' id="Date" placeholder='Date' />
        <input type="number" name="Quantity" id="Quantity" placeholder='Quantity'/>
        <input type="text" name="GasStationType" id='GasStationType' placeholder='GasStationType'/>
        <br />
        <input type="button" value="Add" />
      </div>
      </form>
    </div>
  )
}

export default App