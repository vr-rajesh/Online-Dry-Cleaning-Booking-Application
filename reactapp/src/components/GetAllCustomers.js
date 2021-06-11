import React, { Component } from "react";
import axios from "axios";
import CustomerService from "../services/CustomerService";
import AdminNav from "./AdminNav";
import swal from 'sweetalert';
import {Link} from 'react-router-dom'

const formStyle = {
    padding: "30px",
    textAlign: "center"
};
const mystyle = {
    // color: "white",
    backgroundColor: "DodgerBlue",
    padding: "20px",
    fontFamily: "Arial",
  };
class GetAllCustomers extends Component {
  constructor(props) {
    super(props);

    this.state = {
      customers: [],
    };
  }

  handleDeleteProduct = (cid) => {
    // event.preventDefault();
    axios
      .delete(`http://localhost:9000/api/customer/${cid}`)
      .then((response) => {
        console.log(response);
        console.log(response.data);
        // alert("Data Deleted Successfully")
        swal({
                        title: "Once deleted, you will not be able to recover",
                        icon: "warning",
                      });
        // swal("Data Deleted Successfully", "success");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  handleViewProduct = () => {
    this.props.history.push("/viewCustomersById");
  };

  componentDidMount() {
    //axios.get('http://localhost:9000/api/customer')
    CustomerService.getAllCustomers()
      .then((response) => {
        console.log(response);
        this.setState({ customers: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  render() {
    const { customers } = this.state;
    return (
      <div>
        <AdminNav></AdminNav>
        <div style={formStyle} className>
          <h1 style={mystyle}>Customer Details</h1>
          <table className="table table-dark table-striped table-hover">
            <thead className="thead-dark">
              <tr className="table-dark">
                <th>Customer ID</th>
                {/* <th>Customer @Username</th> */}
                {/* <th>Customer Password </th> */}
                <th>Customer Name</th>
                <th>Customer Email</th>
                <th>Customer DOB</th>
                <th>Customer contact No</th>
                <th>Customer Address</th>
                <th>Delete Customer</th>
                <th>View Customer</th>
                <th>Update Customer</th>
              </tr>
            </thead>
            <tbody>
              {customers.map((customer) => (
                <tr key={customer.userId}>
                  <td>{customer.userId}</td>
                  {/* <td>{customer.username}</td> */}
                  {/* <td>{customer.password}</td> */}
                  <td>{customer.name}</td>
                  <td>{customer.email}</td>
                  <td>{customer.dob}</td>
                  <td>{customer.contactNo}</td>
                  <td>{customer.address}</td>
                  <td>
                    <button
                      className="btn btn-outline-danger"
                      onClick={() => this.handleDeleteProduct(customer.userId)}
                    >
                      Delete
                    </button>
                  </td>
                  <td>
                    <button
                      className="btn btn-outline-info"
                      onClick={() => this.handleViewProduct(customer.userId)}
                    >
                      View
                    </button>
                  </td>
                  <td>
                  <Link to='/updateCustomer'>
                    <button
                      className="btn btn-outline-primary"
                      >
                      Update
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
}

export default GetAllCustomers;
