import React from 'react'
import {Link} from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.css";
import { Button } from '../Button'
import './login.scss'
import axios from 'axios'
import Navbar from '../Navbar'
import Footer from '../Footer'
import Swal from 'sweetalert2'

const validateForm = (errors) => {
    let valid = true;
    Object.values(errors).forEach((val) => val.length > 0 && (valid = false));
    return valid;
};

class Login extends React.Component {
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
            errors: {},
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleCheckBoxChange = this.handleCheckBoxChange.bind(this);
        this.submitHandler = this.submitHandler.bind(this);
        this.checkErrors = this.checkErrors.bind(this);
    }

    handleCheckBoxChange = (event) => {
        const input = event.target;
        const value = input.type === "checkbox" ? input.checked : input.value;
        this.setState({ [input.name]: value });
    };

    handleChange(e){
        e.preventDefault();
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }   
    checkErrors(){
        let errors = this.state.errors;
        if (this.state.username.length == 0){
            errors.username = "Enter a value of username";
        }
        else if(this.state.username.length < 1){
            errors.username = "Invalid Username";
        }
        if (this.state.password.length == 0){
            errors.password = "Enter a value of Password";
        }
        else if(this.state.password.length < 4){
            errors.password = "Invalid Password";
        }
    }

    componentDidMount() {
        const rememberMe = localStorage.getItem("rememberMe") === true;
        const id = rememberMe ? localStorage.getItem("id") : "";
        this.setState({ id, rememberMe });
    }

    submitHandler = (event) => {
        event.preventDefault()
        this.checkErrors()
        console.log(this.state.errors);
        console.log(this.state.rememberMe);
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
                    sessionStorage.setItem("id", this.state.username);
                    sessionStorage.setItem("role", this.state.choice);
                
                    localStorage.setItem("rememberMe", this.state.rememberMe);
                    localStorage.setItem("id", this.state.rememberMe ? this.state.id : "");
                    if (this.state.loginRes === "Login successfull" && this.state.loggedIn === true) {
                        Swal.fire({
                            icon: 'success',
                            text: 'Login Success',
                        })
                        this.props.history.push(`/home-customer/${this.state.id}`);
                        
                    } else {
                        // alert(this.state.loginRes);
                        Swal.fire({
                            icon: 'error',
                            title: 'Oops...',
                            text: 'Something went wrong!',
                          })
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
                        Swal.fire({
                            icon: 'success',
                            text: 'Login Success',
                        })
                        this.props.history.push(`/home-admin`);
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
        let user_error, pass_error;
        if(this.state.errors){
            console.log("kdjbfhkjbfdks");
            user_error = <small >{this.state.errors.username}</small>                
        }
        if(this.state.errors){
            pass_error = <small >{this.state.errors.password}</small>                
        }
        return <div> 
        <div className="base-container">
            <Navbar />
            <div
                className="alert alert-secondary alert-dismissible fade show text-center m-0"
                choice="alert">
                    In accordance with the latest Government guidelines on{" "}
                    <strong>COVID-19</strong>, our services will be restricted in some
                locations
            </div>
            <div className="row">
                <div className="col-lg-8 col-md-6 image p-0">
                    <div className="div-image"></div>
                    <div className="after"></div>
                </div>
                <div className="col-lg-4 col-md-6 p-0">
                    <div className="login-fields">
                        <form className="form" onSubmit={this.submitHandler}>
                            <div className="header pb-2">Login</div>
                            <div className="form-group">
                                <input type="text" name="username" placeholder="Please Enter the Username" value={this.state.username} onChange={this.handleChange}/>
                            </div>
                                <small className="text-danger">{this.state.errors.username}</small>
                            <div className="form-group">
                                <input type="password" name="password" placeholder="Please Enter the Password" value={this.state.password} onChange={this.handleChange}/>
                            </div>
                                <small className="text-danger">{this.state.errors.password}</small>
                            <div className="form-group">
                                <select
                                    name="choice"
                                    placeholder="Please Select the User Role"
                                    value={this.state.choice}
                                    onChange={this.handleChange}
                                >
                                    <option value="customer">User</option>
                                    <option value="admin">Admin</option>
                                </select>
                            </div>
                            <div className="row">
                                <div className="col-6 login-button">
                                    <span>
                                        <input
                                            name="rememberMe"
                                            className="input-remember"
                                            checked={this.state.rememberMe}
                                            onChange={this.handleCheckBoxChange}
                                            type="checkbox"
                                        />
                                            Remember me
                                    </span>
                                </div>
                                <div className="col-6 login-button">
                                    <Button type='submit' buttonStyle='btn--primary' buttonColor="primary">
                                        Login
                                    </Button>
                                </div>
                            </div>
                            <p className="register">Don't have an account? &nbsp;
                                <Link to="/registerCustomer" >
                                    <Button buttonStyle='btn--primary' buttonColor="blue">
                                        Register Here
                                    </Button>
                                </Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
        </div>
    }
}

export default Login;