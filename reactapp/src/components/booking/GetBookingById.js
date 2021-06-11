import React, { useEffect, useState } from "react";
import axios from "axios";
function GetBookingById() {
  let initialBooking={bookingId:null,bookingDate:null,bookingTime:null,serviceType:'',customer:{userId:0}}
  let [booking, setBooking] = useState(initialBooking);
  let [bookingId, setBookingId] = useState(0);
  let [btnId,setBtnId]=useState(0)
  //let [msg,setMsg]=useState('')
  const formStyle = {
    backgroundColor: "#21839a",
    padding: "60px"
  };
  const mystyle = {
    color: "white",
    backgroundColor: "#21839a",
    padding: "15px",
    fontFamily: "aria",
  };

  useEffect(() => {
    const URL = `http://localhost:9000/api/booking/book/${bookingId}`;
    axios
      .get(URL)
      .then((response) => {
          setBooking(response.data)
          console.log(response.data)
          console.log(response.statusText)
      })
      .catch((error) =>{
        if(error.response){
          alert("Booking with ID is not available")
        }else if(error.request){
          alert("Server Not connected")
        }
      });
  },[btnId])

  function handleBtnClick()
  {
      setBtnId(bookingId)
  }
  return (
    <div style={formStyle}>
      <h4 style={mystyle}>Booking Details</h4>
      <hr />
      <div className="row mt-2 ">
        <div className="col-3">
        <label>Booking ID</label>
        <input
        type="number"
        min="0"
          className="form-control"
          value={bookingId}
          onChange={(e) =>setBookingId(e.target.value)}
        />
        <button onClick={handleBtnClick} className='btn btn-success mt-2'>Get Details</button>
        </div>
            <div>
                <ul class="list-group mt-4 col-6"  >
                    <li class="list-group-item active">Booking Details</li>
                      <li class="list-group-item">Booking ID: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  {booking.bookingId}</li>
                      <li class="list-group-item list-group-item-secondary" >Booking Date :&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   
                      {booking.bookingDate}</li>
                      <li class="list-group-item">Booking Time :&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {booking.bookingTime}</li>
                      <li class="list-group-item">Service Type:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{booking.serviceType}</li>
                      <li class="list-group-item">USer Id:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{booking.customer.userId}</li>
                </ul>
            </div>
            <hr/>
            </div>
    </div>
  );
}

export default GetBookingById;
