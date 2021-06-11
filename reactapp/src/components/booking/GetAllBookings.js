import React, { useState, useEffect } from "react";
import {Link} from 'react-router-dom'
import axios from "axios";
import AdminNav from "../AdminNav";
import swal from 'sweetalert';

function GetAllBookings() {
  let initialBookings = [];
  let [booking, setBooking] = useState(initialBookings);

  const formStyle = {
    backgroundColor: "#FFFAFA",
    padding: "30px",
  };
  const mystyle = {
    color: "white",
    backgroundColor: "DodgerBlue",
    padding: "10px",
    fontFamily: "Arial",
  };

  useEffect(() => {
    const URL = "http://localhost:9000/api/booking";
    axios
      .get(URL)
      .then((response) => {
        setBooking(response.data);
        console.log(response.data);
      })
      .catch((error) => console.log(error.message));
  }, []);
  function handleDeleteOrder(bookingId) {
    const URL = `http://localhost:9000/api/booking/${bookingId}`;
    axios.delete(URL).then((response) => {
      console.log(response.data);
      swal({
        title: "Once deleted, you will not be able to recover",
        icon: "warning",
      });
    });
  }
  return (
    <div>
      <AdminNav />
      {/* <div
        className="alert alert-secondary alert-dismissible fade show text-center"
        role="alert"
      >
        In accordance with the latest Government guidelines on{" "}
        <strong>COVID-19</strong>, our services will be restricted in some
        locations
      </div> */}
      <div style={formStyle}>
        <h1 style={mystyle}>All Bookings</h1>
        <table className="table table-dark table-striped table-hover">
          <thead className="thead-dark">
            <tr className="table-dark">
              <th>Booking ID</th>
              <th>Booking Date</th>
              <th>Booking Time</th>
              <th>Service Type</th>
              <th>User Id</th>
              <th className="text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {booking.map((booking) => (
              <tr>
                <td>{booking.bookingId}</td>
                <td>{booking.bookingDate}</td>
                <td>{booking.bookingTime}</td>
                <td>{booking.serviceType}</td>
                <td>{booking.customer.userId}</td>
                <td className="text-center">
                  <button
                    className="btn btn-outline-danger mr-2"
                    onClick={() => handleDeleteOrder(booking.bookingId)}
                  >
                    Delete
                  </button>
                  <Link to='/viewBooking-id'>
                    <button
                      className="btn btn-outline-info mr-2"
                      >
                      Info
                    </button>
                  </Link>
                  <Link to='/viewBooking-customer'>
                    <button
                      className="btn btn-outline-primary mr-2"
                      
                      >
                      Cust Id
                    </button>
                  </Link>
                  <Link to='/viewBooking-date'>
                    <button
                      className="btn btn-outline-success mr-2"
                      >
                      Date
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

export default GetAllBookings;
