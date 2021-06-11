import React, { Component } from 'react'
import axios from 'axios'
import Booking from '../assets/booking.jpg'
import Navbar from '../components/customer-home/customerNavbar'
import Swal from 'sweetalert2'

const validateForm = errors => {
    let valid = true;
    Object.values(errors).forEach((val) => val.length > 0 && (valid = false));
    return valid;
};

const formStyle = {
    backgroundColor: "#fff",
    padding: "60px",
    width: '500px',
    marginLeft: 'auto',
    marginRight: 'auto'

};
const flexStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
};
var dates = new Date();
    var date = dates.getDate();
    if(date<10)
    {
      date='0' + date;
    }
    var month = dates.getMonth()+1;
    if(month<10)
    {
      month='0' + month;
    }

    var year = dates.getFullYear();
    var minDate=year+"-"+month+"-"+date;

class AddBooking extends Component {

    constructor(props) {
        super(props)

        this.state = {
            serviceType: null,
            bookingTime: null,
            bookingDate: '',
            customer:{userId:null},
            errors: {
                serviceType: '',
                customer:{
                    // userId:'',
                    userId: sessionStorage.getItem('id')

                },
            }
        }
    }
    changeHandler = (event) => {

        const { name, value } = event.target;
        let errors = this.state.errors;

        switch (name) {
            case "serviceType":
                errors.serviceType =
                    value.length < 1 ? "Service Type cannot be null" : "";
                break;
            default:
                break;
        }
        this.setState({ [event.target.name]: event.target.value })


    }
    
    submitHandler = (event) => {
        event.preventDefault()
        console.log(this.state);
        if (validateForm(this.state.errors)) {
            let booking = {
                serviceType: this.state.serviceType,
                bookingDate: this.state.bookingDate,
                bookingTime: this.state.bookingTime,
                customer:{
                    // userId: this.state.userId,
                userId: sessionStorage.getItem('id')
            }
        }
            axios.post('http://localhost:9000/api/booking',booking)
                .then(response => {
                    console.log(response);
                    // alert("Details Updated Successfully")
                    Swal.fire({
                        icon: 'success',
                        text: 'Details Updated Successfully',
                    })
                })
                .catch(error => {
                    console.log(error);
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Please provide valid details!',
                      })
                })
        }
    }
    render() {

        const {errors} = this.state;
        const { serviceType, bookingTime, bookingDate,customer} = this.state
        return (
            <div style={{backgroundImage: 'linear-gradient(to left, rgba(255,0,0,0), rgb(33,131,154))', minHeight: '100vh'}}>
                <Navbar />
                <div className="row mx-auto" style={flexStyle} >
                    <div className="col-6 mx-auto mt-5" >
                        <div className="row mx-auto mt-5">
                        <div style={formStyle} className="card">
                            <h1 className="m-0">Schedule Pickup</h1>
                            <hr className="mt-1 mb-1"/>
                            <form className="form-group" onSubmit={this.submitHandler} noValidate>
                            <div>
                                {/* <div className="col mt-4">
                                    <label className="form-label mb-1">User Id</label>
                                    <input className="form-control"
                                        type="number"
                                        range min='1'
                                        name="userId"
                                        value={customer.userId}
                                        onChange={this.changeHandler}
                                        placeholder="Enter User Id"
                                        required
                                    ></input>
                                </div> */}
                                <div className="col mt-4">
                                    <label className="form-label mb-1">Service Type</label>
                                    <select class="form-select" name="serviceType"
                                        value={serviceType}
                                        onChange={this.changeHandler} required aria-label="Default select example">
                                    <option selected>Select Service Type</option>
                                    <option value="Shoe laundry">shoe laundry</option>
                                    <option value="Dry cleaning">Dry cleaning</option>
                                    <option value="Steam ironing">Steam ironing</option>
                                    <option value="Steam ironing">Deep cleaning</option>
                                    </select>   
                                </div>
                                <div className="row mt-4">
                                <div className="col">
                                    <label className="form-label mb-1">Booking Date</label>
                                    <input className="form-control"
                                        type="Date"
                                        min={minDate}
                                        name="bookingDate"
                                        value={bookingDate}
                                        onChange={this.changeHandler}
                                        required
                                    ></input>
                                </div>
                                <div className="col">
                                <label className="form-label mb-1">Booking Time</label>
                                <input className="form-control"
                                    type="time"
                                    name="bookingTime"
                                    value={bookingTime}
                                    onChange={this.changeHandler}
                                    required
                                ></input>
                                </div>
                                </div>
                                </div>
                                <div className="col-15 container text-center mt-3">
                                    <button type="submit" className="btn btn-primary mt-3">Confirm Booking</button>
                                </div>
                                </form>
                                </div>
                    </div>
                    </div>
                    <div className="col-6 mx-auto mt-5" >
                        <div style={{display:'flex', justifyContent: 'center',  alignItems: 'center'}}>
                            <img className="" style={{width:'80%'}} src={Booking} />
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

export default AddBooking