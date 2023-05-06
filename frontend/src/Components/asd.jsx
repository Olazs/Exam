import React from "react";

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
export default GetApiDatas