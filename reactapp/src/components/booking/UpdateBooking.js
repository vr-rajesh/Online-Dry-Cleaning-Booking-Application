import React, { Component } from 'react'
import axios from 'axios'
import CustomerNavigation from '../CustomerNavigation';




const validateForm = errors => {
    let valid = true;
    Object.values(errors).forEach((val) => val.length > 0 && (valid = false));
    return valid;
};


const formStyle = {
    backgroundColor: "#fff",
    padding: "12px",
    width: '750px',
    marginLeft: '54px'
    // height: '500px'
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
class UpdateBooking extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // bookingId:sessionStorage.getItem('bookingId'),
            serviceType: null,
            bookingTime: '',
            bookingDate: '',
            customer:{userId:sessionStorage.getItem('id')},
            errors: {
                serviceType: '',
                // customer:{
                //     userId:'',
                //     // userId:sessionStorage.getItem('id')
                // },
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
                userId:sessionStorage.getItem('id')
                }
            }
            console.log(booking)
            axios.put('http://localhost:9000/api/booking', booking)
                .then(response => {
                    console.log(response);
                    alert("Details Updated Successfully")
                })
                .catch(error => {
                    console.log(error);
                })
        }
    }
    render() {

        const {errors} = this.state;
        const { serviceType, bookingTime, bookingDate,customer} = this.state
        return (
            
            <div style={{backgroundColor: "#1a85bf", minHeight: '100vh'}}>
                <CustomerNavigation/>
                <div className="row mx-auto mt-5" >
                    <div className="row mx-auto mt-5">
                        <div style={formStyle} className="card">
                            <h1>Update Pickup</h1>
                            <hr/>
                            <form className="form-group" onSubmit={this.submitHandler} noValidate>
                            <div>
                                
                                {/* <div className="col mt-2">
                                    <label className="form-label">User Id</label>
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
                                <div className="col mt-2">
                                    <label className="form-label">Service Type</label>
                                    <select className="form-select" name="serviceType"
                                        value={serviceType}
                                        onChange={this.changeHandler} required aria-label="Default select example">
                                    <option selected>Select Service Type</option>
                                    <option value="Shoe laundry">shoe laundry</option>
                                    <option value="Dry cleaning">Dry cleaning</option>
                                    <option value="Steam ironing">Steam ironing</option>
                                    <option value="Steam ironing">Deep cleaning</option>
                                    </select>   
                                </div>
                                <div className="row mt-2">
                                <div className="col">
                                    <label className="form-label">Booking Date</label>
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
                                <label className="form-label">Booking Time</label>
                                <input className="form-control"
                                    type="text"
                                    name="bookingTime"
                                    value={bookingTime}
                                    onChange={this.changeHandler}
                                    required
                                ></input>
                                </div>
                                </div>
                                </div>
                                <div className="col-15 contaoner">
                                    <button type="submit" className="btn btn-primary mt-3">Confirm Booking</button>
                                </div>
                                </form>
                                </div>
                    </div>
                </div>
            </div>

        )
    }
}

export default UpdateBooking