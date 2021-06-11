import React, { useEffect, useState } from "react";
import axios from "axios";
function GetItemById() {
  let initialItem = {};
  let [item, setItem] = useState(initialItem);
  let [itemId, setItemId] = useState(0);
  let [btnitemId,setBtnitemId]=useState(0)

  const formStyle = {
    backgroundColor: "#21839a",
    padding: "25px"
  };
  const mystyle = {
    color: "white",
    backgroundColor: "#21839a",
    padding: "15px",
    fontFamily: "aria",
  };
  useEffect(() => {
    //event.preventDefault();
    const URL = `http://localhost:9000/customerItem/${itemId}`;
    axios
      .get(URL)
      .then((response) => {
        setItem(response.data);
        console.log(response.data);
      })
      .catch((error) => { if(error.response)
      {
        alert("Item with ID is not available")
      }else if(error.request){
        alert("Server Not connected")
      }
    });
  },[btnitemId]);
    

  function handleBtnClick()
  {
    //event.preventDefault();
      setBtnitemId(itemId)
  }

  return (
    <div style={formStyle}>
      <h4 style={mystyle}> Item Details</h4>
      <hr />
      <div className="row mt-3">
        <div className="col-3">
        <label>Item ID</label>
        <input
          className="form-control"
          value={itemId}
          placeholder="Item Id"
          onChange={(e) =>setItemId(e.target.value)}
        />
        <button onClick={handleBtnClick} className='btn btn-success mt-2'>Get Details</button>
      </div>
      <ul class="list-group mt-4 col-6">
      <li class="list-group-item active">Customer Details</li>
            <li class="list-group-item">
              User ID  : &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              {item.itemId}
            </li>
            <li class="list-group-item list-group-item-secondary">
              Name : &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              {item.name}
            </li>
            <li class="list-group-item">
              Color :    &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;{item.color}
            </li>
            <li class="list-group-item  list-group-item-secondary">
              Category: 
              &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
              {item.category}
            </li>
            <li class="list-group-item">
              Quantity :  &nbsp;  &nbsp;  &nbsp; &nbsp;&nbsp;{item.quantity}
            </li>
            <li class="list-group-item">
              Material :   &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;{item.material}
            </li>
            <li class="list-group-item">
              Description   :    &nbsp;&nbsp;&nbsp;{item.description}
            </li>
      
      </ul>
    </div>
    </div>
  );
}

export default GetItemById;
