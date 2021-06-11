import React, { useEffect, useState } from "react";
import axios from "axios";
function GetBookingsByDate() {
  let initialBooking=[];
  let [bookings, setBookings] = useState(initialBooking);
  const formStyle = {
    backgroundColor: "#FFFAFA",
    padding: "15px"
};
const mystyle = {
    color: "white",
    backgroundColor: "DodgerBlue",
    padding: "10px",
    fontFamily: "Arial",
  };
  
  useEffect(() => {
    const URL = `http://localhost:9000/api/booking/date`;
    axios
      .get(URL)
      .then((response) => {
          setBookings(response.data)
          console.log(response.data)
      })
      .catch((error) => console.log(error.message));
  },[])

  return (
    <div style={formStyle}>
      <h4 style={mystyle}>Booking Details</h4>
      <hr />
      <table className="table table-dark table-striped table-hover">
          <thead className="thead-dark">
            <tr className="table-dark">
            <th>Booking ID</th>
            <th>Booking Date</th>
            <th>Booking Time</th>
            <th>Service Type</th>
            <th>User Id</th>
            
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
           </tr>
            ))}
          </tbody>
        
      </table>
    </div>
  );
}

export default GetBookingsByDate;
