import axios from "axios";
import React, { useState, useEffect } from "react";
import AdminNav from "./AdminNav";
const formStyle = {
  backgroundColor: "#FFFAFA",
  padding: "25px",
};
function GetCustomerById() {
  const [post, setPost] = useState({});
  const [id, setId] = useState(0);
  const [idFromButtonClick, setIdFromButtonClick] = useState(0);

  const handleClick = () => {
    setIdFromButtonClick(id);
  };

  useEffect(() => {
    axios
      .get(`http://localhost:9000/api/customer/${idFromButtonClick}`)
      .then((res) => {
        console.log(res);
        setPost(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [idFromButtonClick]);
  return (
    <div>
      <AdminNav></AdminNav>
      <div style={formStyle}>
        <h1>Customer Information</h1>
        <div className="row mt-3">
          <div className="col-3">
            <input
              type="text"
              value={id}
              onChange={(e) => setId(e.target.value)}
              className="form-control"
              placeholder="Customer ID"
            />
          </div>
          <div className="col-3">
            <button
              type="button"
              className="btn btn-primary"
              onClick={handleClick}
            >
              Fetch Data
            </button>
          </div>
        </div>

        <div>
          <ul class="list-group mt-4 col-6">
            <li class="list-group-item active">Customer Details</li>
            <li class="list-group-item">
              User ID: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              {post.userId}
            </li>
            <li class="list-group-item list-group-item-secondary">
              Name : &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              {post.name}
            </li>
            <li class="list-group-item">
              Username : &nbsp;&nbsp;&nbsp;{post.username}
            </li>
            {/* <li class="list-group-item list-group-item-secondary">
              Password : {post.password}
            </li> */}
            <li class="list-group-item  list-group-item-secondary">
              Email :
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              {post.email}
            </li>
            <li class="list-group-item">
              Phone No : &nbsp;&nbsp;{post.contactNo}
            </li>
            <li class="list-group-item  list-group-item-secondary">
              DOB :
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              {post.dob}
            </li>
            <li class="list-group-item">
              Address : &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{post.address}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default GetCustomerById;
