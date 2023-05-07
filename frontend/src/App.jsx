import {useState, useEffect, useContext} from 'react'
import "./App.css"
import ApiDatas from "./Components/ApiDatas"

const App = () => {
  const [data, setData] = useState([]);

  const [mileage, setMileage] = useState()
  const [description, setDescription] = useState()
  const [price, setPrice] = useState()
  const [date, setDate] = useState()
  const [quantity, setQuantity] = useState()
  const [gasStationType, setGasStationType] = useState()

  const fetchData = () => {
    fetch("http://localhost:8000/api/GetAllEvents/")
        .then(response => response.json())
        .then(actualData => setData(actualData))
        .catch((err) => {
          console.log(err.message);
        });
    };

  const Add = (e) => {
    e.preventDefault()
    
    let data = {
      mileage:mileage,
      description:description,
      price:price,
      date:date
    }

    let endpoint = quantity && gasStationType ? "CreateRefuel" : "CreateEvent"

    if(endpoint == "CreateRefuel"){
      data = {
        mileage:mileage,
        description:description,
        price:price,
        date:date,
        quantity:quantity,
        gas_station:1
      }
    }
    console.log(JSON.stringify(data))

    fetch(`http://localhost:8000/api/${endpoint}/`, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
        "access-control-allow-origin": "*",
        'Access-Control-Allow-Headers': 'Content-Type, Authorization',
        'Access-Control-Allow-Methods': '*',
      }
    })
    .then(data => {
      console.log(data);

      fetchData()
    })
    .catch(error => {
      console.log(error);
    });
  }

  return (
    <div className='App'>
     <form className="new-item-form" onSubmit={Add} id='form'>
      <h1 htmlFor="">New Log</h1>
      <div className="form-row">
        <input type="number" name='Mileage' id='Mileage' onChange={(event)=>{ setMileage(event.target.value*1) }} placeholder='Mileage' /> 
        <input type="text" name='Description' id="Description" onChange={(event)=>{ setDescription(event.target.value) }} placeholder='Description'/>
        <input type="number" name="Price" id="Price" onChange={(event)=>{ setPrice(event.target.value*1) }} placeholder='Price' />
        <input type="date" name='Date' id="Date" placeholder='Date' onChange={(event)=>{ setDate(event.target.value) }} />
        <input type="number" name="Quantity" id="Quantity" onChange={(event)=>{ setQuantity(event.target.value*1) }} placeholder='Quantity'/>
        <input type="text" name="GasStationType" id='GasStationType' onChange={(event)=>{ setGasStationType(event.target.value) }} placeholder='GasStationType'/>
        <br />
        <button id='AddButton' onClick={Add}>Add</button>
      </div>
      </form>
      <div>
        <ApiDatas fetchData={fetchData} data={data}/>
      </div>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet"></link>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"></script>

    </div>
  )

}




export default App



