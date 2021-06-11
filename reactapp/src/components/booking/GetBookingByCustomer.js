import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function GetBookingByCustomer() {
  let initialBooking = [];
  let [bookings, setBookings] = useState(initialBooking);
  let [customerId, setCustomerId] = useState(0);
  let [btnItemsByCustomerId, setBtnItemsByCustomerId] = useState(0);
  const formStyle = {
    backgroundColor: "#FFFAFA",
    padding: "15px",
  };
  const mystyle = {
    color: "white",
    backgroundColor: "DodgerBlue",
    padding: "10px",
    fontFamily: "Arial",
  };

  useEffect(
    () => {
      const URL = `http://localhost:9000/api/booking/customer/${customerId}`;
      axios
        .get(URL)
        .then((response) => {
          setBookings(response.data);
          console.log(response.data);
        })
        .catch((error) => console.log(error.message));
    },
    [btnItemsByCustomerId],
    []
  );

  function handleBtnClick() {
    setBtnItemsByCustomerId(customerId);
  }
  function handleDeleteBooking(bookingId) {
    const URL = `http://localhost:9000/api/booking/${bookingId}`;
    axios.delete(URL).then((response) => {
      console.log(response.data);
    });
  }
  function handleUpdateBooking(bookingId) {
    console.log(bookingId);
    this.props.history.push("/UpdateBooking", bookingId);
  }

  return (
    <div style={formStyle}>
      <h2 style={mystyle}>Booking Details By CustomerId</h2>
      <div className="form-control">
        <label className="label ">Customer ID</label>
        <input
          className="form-control"
          value={customerId}
          onChange={(e) => setCustomerId(e.target.value)}
        />
        <button
          onClick={handleBtnClick}
          className="btn btn-outline-primary mt-3"
        >
          Get Details
        </button>
      </div>
      <div style={{zIndex:'99'}}>
        <table className="table table-hover table-striped border-dark mt-3">
          <thead>
            <tr className="table-dark">
              <th>Booking ID</th>
              <th>Booking Date</th>
              <th>Booking Time</th>
              <th>Service Type</th>
              <th>User Id</th>
              <th>Delete Order</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking) => (
              <tr>
                <td>{booking.bookingId}</td>
                <td>{booking.bookingDate}</td>
                <td>{booking.bookingTime}</td>
                <td>{booking.serviceType}</td>
                <td>{booking.customer.userId}</td>
                <td>
                  <button
                    className="btn btn-outline-danger"
                    onClick={() => handleDeleteBooking(booking.bookingId)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default GetBookingByCustomer;
