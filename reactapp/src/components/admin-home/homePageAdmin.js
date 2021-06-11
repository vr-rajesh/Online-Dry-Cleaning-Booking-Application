import React from 'react'
import {Link} from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.css";
import './homeadmin.scss'
import { GiLoincloth } from "react-icons/gi";
import { FaUsers, FaBookOpen, FaMoneyBillAlt, FaPenSquare, FaMoneyCheck } from "react-icons/fa";
import axios from 'axios'
import AdminNavbar from './adminNavbar'


const validateForm = (errors) => {
    let valid = true;
    Object.values(errors).forEach((val) => val.length > 0 && (valid = false));
    return valid;
};

class AdminHome extends React.Component {
    constructor(props) {
        super(props);
        this.state= {
            id: '',
            loginRes:'',
            username: '',
            password: '',
            choice: 'customer',
            rememberMe: false,
            loggedIn: false,
            errors: {
                username: "",
                password: "",
            },
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleCheckBoxChange = this.handleCheckBoxChange.bind(this);
        this.submitHandler = this.submitHandler.bind(this);
    }

    handleCheckBoxChange = (event) => {
        const input = event.target;
        const value = input.type === "checkbox" ? input.checked : input.value;
        this.setState({ [input.name]: value });
    };

    handleChange(e){
        e.preventDefault();
        const { name, value } = e.target;
        let errors = this.state.errors;

        switch (name) {
            case "username":
                errors.username = value.length < 2 ? "invalid id" : "";
                break;

            case "password":
                errors.password =
                value.length < 4 ? "password must be greater than 4 characters" : "";
            default:
                break;
        }
        this.setState({
            errors, [name]: value
        });
    }   

    componentDidMount() {
        const rememberMe = localStorage.getItem("rememberMe") === true;
        const id = rememberMe ? localStorage.getItem("id") : "";
        this.setState({ id, rememberMe });
    }

    submitHandler = (event) => {
        event.preventDefault()
        if (validateForm(this.state.errors)) {
            let user = {
                username: this.state.username,
                password: this.state.password,
                choice: this.state.choice,
            }
            if (this.state.choice === "customer") {
                axios.post('http://localhost:9000/api/login/', user).then(
                  (res) => {
                    this.setState({ loginRes: res.data, loggedIn: true });
                    console.log(res.data);
                    sessionStorage.setItem("id", this.state.id);
                    sessionStorage.setItem("role", this.state.choice);
                
                    localStorage.setItem("rememberMe", this.state.rememberMe);
                    localStorage.setItem("id", this.state.rememberMe ? this.state.id : "");
                    if (this.state.loginRes === "Login successfull" && this.state.loggedIn === true) {
                        this.props.history.push(`/homepage-client/${this.state.id}`);
                    } else {
                        alert(this.state.loginRes);
                        window.location.reload(false);
                    }
                }
                );
            }
            if (this.state.choice === "admin") {
                axios.post('http://localhost:9000/api/login/', user).then(
                    (res) => {
                    console.log(res.data);
                    this.setState({ loginRes: res.data, loggedIn: true });
                    if (this.state.loginRes === "Login successfull" && this.state.loggedIn === true) {
                        this.props.history.push(`/homepage-admin`);
                    } else {
                        alert(this.state.loginRes);
                        window.location.reload(false);
                    }
                    }
                );
            }
        }
    } 
    render() {
        return <div className="image-admin">
            <div className="base-container-admin">
                <div className="after-admin">

                    <AdminNavbar />
                    <div className="row row-admin">
                        <div className="col-lg-4 col-md-6 each-card-admin">
                            <Link to='/viewCustomers'>
                                <div className="card card-admin">
                                    <FaUsers className="icons-admin"/>  
                                    <br></br> 
                                    <p>Customer Details</p>
                                </div>
                            </Link>
                        </div>
                        <div className="col-lg-4 col-md-6 each-card-admin">
                            <Link to='/viewBookings'>
                                <div className="card card-admin">
                                    <FaBookOpen className="icons-admin"/>
                                    <br></br> 
                                    <p>Booking Details</p>
                                </div>
                            </Link>
                        </div>
                        <div className="col-lg-4 col-md-6 each-card-admin">
                            <Link to='/viewPayments'>
                                <div className="card card-admin">
                                    <FaMoneyBillAlt className="icons-admin"/>
                                    <br></br> 
                                    <p>Payment Details</p>
                                </div>
                            </Link>
                        </div>
                        <div className="col-lg-4 col-md-6 each-card-admin">
                            <Link to='/viewOrder'>
                                <div className="card card-admin">
                                    <FaPenSquare className="icons-admin"/>
                                    <br></br> 
                                    <p>Order Details</p>
                                </div>
                            </Link>
                        </div>
                        {/* <div className="col-lg-4 col-md-6 each-card-admin">
                            <Link to='/'>
                                <div className="card card-admin">
                                    <FaMoneyCheck className="icons-admin"/>
                                    <br></br> 
                                    <p>Payment and Card Details</p>
                                </div>
                            </Link>
                        </div> */}
                        <div className="col-lg-4 col-md-6 each-card-admin">
                            <Link to='/viewItems'>
                                <div className="card card-admin">
                                    <GiLoincloth className="icons-admin"/>
                                    <br></br> 
                                    <p>Customer Item Details</p>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    }
}

export default AdminHome;