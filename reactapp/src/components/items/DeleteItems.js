import React, { useEffect, useState } from "react";
import axios from "axios";
import AdminNav from "../AdminNav";
import {Link} from 'react-router-dom'
import swal from 'sweetalert';
function DeleteItems() {
  let initialItem = [];
  let [items, setItem] = useState(initialItem);
  let [customerId, setCustomerId] = useState(0);
   let [btnItemsByCustomerId,setBtnItemsByCustomerId]=useState(0)
  
   const formStyle = {
    backgroundColor: "#FFFAFA",
    padding: "30px"
  };
  const mystyle = {
    color: "white",
    backgroundColor: "DodgerBlue",
    padding: "20px",
    fontFamily: "aria",
  };
  useEffect(() => {
    
    const URL = `http://localhost:9000/customerItem/customer/${customerId}`;
    axios
      .get(URL)
      .then((response) => {
        setItem(response.data);
        console.log(response.data);
      })
      .catch((error) => console.log(error.message));
  },[btnItemsByCustomerId],[]);


 function handleDeleteItem(itemId) {
    //event.preventDefault();
    axios.delete(`http://localhost:9000/customerItem/${itemId}`)
        .then(response => {
            console.log(response);
            console.log(response.data);
            swal({
              title: "Once deleted, you will not be able to recover",
              icon: "warning",
            });
        }).catch(error =>{
            console.log(error);
        },[])
}
  function handleBtnClick()
  {
      setBtnItemsByCustomerId(customerId)
  }

  return (
    <div>
      <AdminNav />
    <div style={formStyle}>

<h1 style={mystyle}>Item Details</h1>
<div className="form-group">
        <label>Customer ID</label>
        <input
          className="form-control"
          value={customerId}
          onChange={(e) =>setCustomerId(e.target.value)}
        />
        <button onClick={handleBtnClick} className='btn btn-outline-success mt-2'>Get Details</button>
      </div>
      <table className="table table-dark table-striped table-hover">
            <thead className="thead-dark">
              <tr className="table-dark">
            <th>Item ID</th>
            <th>Item Name</th>
            <th>Item color</th>
            <th>Item category</th>
            <th>Item quantity</th>
            <th>Item material</th>
            <th>Item description</th>
            <th>Item Delete</th>
            <th>View Item</th>
           
          </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <tr>
              
                <td>{item.itemId}</td>
                <td>{item.name}</td>
                <td>{item.color}</td>
                <td>{item.category}</td>
                <td>{item.quantity}</td>
                <td>{item.material}</td>
                <td>{item.description}</td>
                <td><button
                className="btn btn-outline-danger"
                onClick={()=>handleDeleteItem(item.itemId)}
                >Delete</button></td>
                <td>
                <Link to='/viewItems-id'>
                    <button
                      className="btn btn-outline-info"
                      >
                      Info
                    </button>
                  </Link>
                </td>
                 </tr>
                 
            ))}
          </tbody>
        
      </table>
    </div>
    </div>
  );
}

export default DeleteItems;
