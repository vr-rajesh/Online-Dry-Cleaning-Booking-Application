import React, { Component } from 'react'
import axios from 'axios'
import Order from '../assets/order.jpg'
import Navbar from '../components/customer-home/customerNavbar'
import Swal from 'sweetalert2'

const validateForm = errors => {
    let valid = true;
    //Object.values(errors).forEach((val) => val.length > 0 && (valid = false));
    return valid;
};

const flexStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
};

const formStyle = {
    backgroundColor: "#fff",
    padding: "40px",
    width: '500px',
    marginLeft: 'auto',
    marginRight: 'auto'
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

class AddOrders2 extends Component {

    constructor(props) {
        super(props)

        this.state = {
            amount: null,
            billingDate: null,
            paymentMethod: null,
            bankName: null,
            cardName: null,
            cardNumber: '',
            expiryDate: null,
            customer: {
                // userId:'',
                userId: sessionStorage.getItem('id')
                },
                errors: {
                    amount: '',
                    billingDate: '',
                    paymentMethod: '',
                    bankName: '',
                    cardName: '',
                    cardNumber: '',
                    expiryDate: '',
            }
        }
    }
    changeHandler = (event) => {

        const { name, value } = event.target;
        let errors = this.state.errors;

        switch (name) {
            case "name":
                errors.amount =
                    value.length < 3 ? "Username must be greater than 3 characters" : "";
                break;
            case "paymentMethod":
                errors.paymentMethod =
                    value.length < 4 ? "Password must be greater than 4 characters" : "";
                break;

            case "bankName":
                errors.bankName =
                    value.length <2 ? "bank name must be greater than 2 characters" : "";
                    break;
            case "cardName":
                errors.cardName =
                    value.length <3 ? "card name must be greater than 3 characters" : "";
                    break;
            case "cardNumber":
                errors.cardNumber =
                    value.length < 16 ? "Card number must be 16 digits" : "";
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
            let order = {
                billingDate: this.state.billingDate,
                amount: this.state.amount,
                paymentMethod: this.state.paymentMethod,
                bankName:this.state.bankName,
                cardName:this.state.cardName,
                cardNumber:this.state.cardNumber,
                expiryDate:this.state.expiryDate, 
                customer:{
                // userId:this.state.userId,
                userId: sessionStorage.getItem('id')
                        }  
                
            }
            axios.post('http://localhost:9000/api/order', order)
                .then(response => {
                    console.log(response);
                    // alert("Details Updated Successfully")
                    Swal.fire({
                        icon: 'success',
                        text: 'Details Updated Successfully',
                    })
                    this.props.history.push("/thankyou");
                })
                .catch(error => {
                    console.log(error);
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Please provide valid details',
                      })
                })
        }
    }
    render() {

        const { errors } = this.state;
        const { billingDate, amount, paymentMethod,cardName,cardNumber,bankName,expiryDate,customer} = this.state;
        return (
            <div style={{backgroundImage: 'linear-gradient(to left, rgba(255,0,0,0), rgb(33,131,154))', minHeight: '100vh'}}>
                <Navbar />
                <div className="row mx-auto" style={flexStyle} >
                    <div className="col-6 mx-auto mt-5" >
                        <div className="row mx-auto mt-5">
                            <div style={formStyle} className="card">
                                <h1>Place Order</h1>
                                <form className="form-group" onSubmit={this.submitHandler} noValidate>
                                    <div>
                                        <div>
                                        <label className="form-label">Please Enter The Below Details</label>
                                        <input className="form-control"
                                        type="Date"
                                        min={minDate}
                                        max={minDate}
                                        name="billingDate"
                                            value={billingDate}
                                            onChange={this.changeHandler}
                                            placeholder="Enter Billing Date"
                                            required
                                        ></input>
                                        </div>
                                    </div>
                                <div className="row">
                                    <div className="col">
                                        <input className="form-control mt-2"
                                        type="number"
                                        name="amount"
                                        value={amount}
                                        onChange={this.changeHandler}
                                        placeholder="Enter Amount"
                                        required
                                        ></input>
                                    </div>
                                    <div className="col">
                                        <input className="form-control mt-2"
                                        type="text"
                                        name="paymentMethod"
                                        value={paymentMethod}
                                        onChange={this.changeHandler}
                                        placeholder="Enter payment method"
                                        required
                                        ></input>
                                    </div>
                                </div>
                                {/* <div>
                                    <input className="form-control mt-2"
                                    type="text"
                                    name="userId"
                                    value={customer.userId}
                                    onChange={this.changeHandler}
                                    placeholder="Enter customer id"
                                    required
                                    ></input>
                                </div> */}
                                <div className="row mt-2">
                                    <div className="col">
                                        <label className="form-label">Enter card details</label>
                                        <input className="form-control"
                                        type="text"
                                        name="bankName"
                                        value={bankName}
                                        onChange={this.changeHandler}
                                        placeholder="Ex : ICICI"
                                        required
                                        ></input>
                                    </div>
                                    <div className="col">
                                        <label className="form-label">Date Of expiry</label>
                                        <input className="form-control"
                                        type="Date"
                                        min={minDate}
                                        name="expiryDate"
                                        value={expiryDate}
                                        onChange={this.changeHandler}
                                        required
                                        ></input>
                                    </div>
                                </div>
                                <div>
                                    <input className="form-control mt-2"
                                    type="text"
                                    name="cardName"
                                    value={cardName}
                                    onChange={this.changeHandler}
                                    placeholder="Enter Your card name"
                                    required
                                    ></input>
                                </div>
                                <div>
                                    <input className="form-control mt-2"
                                    type="text"
                                    name="cardNumber"
                                    value={cardNumber}
                                    onChange={this.changeHandler}
                                    placeholder="Enter Your card number"
                                    required
                                    ></input>
                                </div>

                                <div className="col">
                                    <button type="submit"
                                    className="btn btn-success mt-2">Add Order</button>
                                </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 mx-auto mt-5" >
                        <div style={{display:'flex', justifyContent: 'center',  alignItems: 'center'}}>
                            <img className="" style={{width:'80%'}} src={Order} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default AddOrders2