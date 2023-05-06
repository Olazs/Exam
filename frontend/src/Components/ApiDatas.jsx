import {useState, useEffect, useContext} from 'react'



function GetApiDatas() {

  const [valami, setValami] = useState([])
  const [refresh, setRefresh] = useState([false])

  useEffect(()=>{

    setRefresh(true)

    try {
      fetch("http://localhost:8000/api/GetAllEvents/", {
      method: "GET",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
    }).then(response => {
      console.log(response.body);
       console.log(response);
      response.json();
    }).then(data => {
       //console.log(data);
      setValami(data);
    })
    } catch (error) {
      console.log("KÉPZELD SZAR:\t", error);
    }

  },[refresh])

console.log(valami);

  return (
    <div>
      {/* {valami.map((value, idx) => {
        <p>
          {value.description}
        </p>
      })} */}
    </div>
  )
}

export default GetApiDatas