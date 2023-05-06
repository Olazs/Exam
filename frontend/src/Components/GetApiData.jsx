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
        }).then(response => response.json())
        .then(data => {
          console.log(data);
          setValami(data);
        })
      } catch (error) {
        console.log("KÉPZELD SZAR:\t", error);
      }
  
    },[refresh])
  
  console.log(valami);
  return(
    pass
  )
  }





          