import React from 'react'
import {useState, useEffect, useContext} from 'react'
//import "./styles.css"
import "./App.css"

//api/GetAllEvents/


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
    </div>
  )
}

const GetApiDatas = (props) => {
  const [apiResponse, setApiResponse] = useState([])

  useEffect(() => {
    fetch("api/GetAllEvents/")
    .then(response => response.json())
    .then(date => {
      setApiResponse(data)
    })
  }, [])

  return (
    <div id='ResponseDiv'>
      <table>
        <tbody>
          {apiResponse.map((value, idx) => <TableRow key={idx} rowData={value}/>)}
        </tbody>
      </table>
    </div>
  )
}

const TableRow = (props) => {
  let {milage, date, price, description} = props.rowData
}


export default App