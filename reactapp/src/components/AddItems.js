import React, { Component } from 'react'
import axios from 'axios'
import Items from '../assets/items.jpg'
import Navbar from '../components/customer-home/customerNavbar'
import Swal from 'sweetalert2'


const validateForm = errors => {
    let valid = true;
    Object.values(errors).forEach((val) => val.length > 0 && (valid = false));
    return valid;
};

const formStyle = {
    backgroundColor: "DodgerBlu",
    padding: "30px",
    width: '500px',
    marginLeft: 'auto',
    marginRight: 'auto'

};
const flexStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
};

class AddItems extends Component {

    constructor(props) {
        super(props)

        this.state = {
            name: null,
            color: null,
            category: null,
            quantity: '',
            material: null,
            description:null,
            customer:{
                // userId:null,
                userId : sessionStorage.getItem('id')

            },
            errors: {
                name: '',
                color: '',
                category: '',
                quantity: '',
                material: '',
                description: '',
            }
        }
    }
    changeHandler = (event) => {

        const { name, value } = event.target;
        let errors = this.state.errors;

        switch (name) {
            case "name":
                errors.name =
                    value.length < 4 ? "Name must be greater than 4 characters" : "";
                break;
            case "color":
                errors.color =
                    value.length < 3 ? "Color must be greater than 3 characters" : "";
                break;
            case "category":
                errors.category =
                    value.length < 1 ? "Category must be greater than 4 characters" : "";
                break;
            case "material":
                errors.material =
                value.length < 3 ? "Material must be greater than 3 characters" : "";
                break;
            case "description":
                errors.description =
                    value.description < 8 ? "Description must be greater than 8 characters" : "";

            default:
                break;
        }
        this.setState({ [event.target.name]: event.target.value })


    }

    submitHandler = (event) => {
        event.preventDefault()
        console.log(this.state);
        if (validateForm(this.state.errors)) {
            let customerItem = {
                name: this.state.name,
                color: this.state.color,
                category: this.state.category,
                quantity: this.state.quantity,
                material: this.state.material,
                description: this.state.description,
                customer:{
                    // userId: this.state.userId,
                    userId : sessionStorage.getItem('id')
                    }
            }
            axios.post('http://localhost:9000/customerItem ', customerItem)
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
        const {customer, name, color, category, quantity, material, description } = this.state
       
        return (
            <div style={{backgroundImage: 'linear-gradient(to left, rgba(255,0,0,0), rgb(33,131,154))', minHeight: '100vh'}}    >
                <Navbar />
                <div className="row mx-auto mt-2" style={flexStyle}>
                    <div className="col mx-auto mt-4" >
                        <div className="row mx-auto" >
                            <div style={formStyle} className="card">
                                <h1 className="m-0">Add Items To cart</h1>
                                <hr className="mt-1 mb-1"/>
                                <form className="form-group" onSubmit={this.submitHandler} noValidate>
                                    <div>
                                        {/* <div>
                                        <label className="form-label mt-4">Enter your USER ID</label>
                                        <input className="form-control"
                                        type="number"
                                        name="userId"
                                        range min="1"
                                        value={customer.userId}
                                        onChange={this.changeHandler}
                                        placeholder="Enter User Id"
                                        required
                                        ></input>
                                        {errors.name.length > 0 && (
                                        <span className="text-danger">{errors.name}</span>
                                            )}
                                        </div> */}
                                        <div className="row mt-4">
                                            <div className="col">
                                                <label className="form-label">Enter The Name Of The Item</label>
                                                <input className="form-control"
                                                type="text"
                                                name="name"
                                                value={name}
                                                onChange={this.changeHandler}
                                                placeholder="Enter Item Name"
                                                required
                                                ></input>
                                                {errors.name.length > 0 && (
                                                <span className="text-danger">{errors.name}</span>
                                                )}
                                            </div>
                                            <div className="col">
                                                <label className="form-label">Enter Color Of the Item</label>
                                                <input className="form-control "
                                                type="text"
                                                name="color"
                                                value={color}
                                                onChange={this.changeHandler}
                                                placeholder="Enter Color Of the Item"
                                                required
                                                ></input>
                                                {errors.color.length > 0 && (
                                                <span className="text-danger">{errors.color}</span>
                                                )}
                                            </div>
                                        </div>
                                            <div className="col">
                                                <div >
                                                
                                                    <div className="col mt-4">
                                                        <label className="form-label">Service Type</label>
                                                        <select class="form-select" name="category"
                                                        value={category}
                                                        onChange={this.changeHandler} required aria-label="Default select example">
                                                    <option selected>Open this select menu</option>
                                                    <option value="Casual clothes">Casual clothes</option>
                                                        <option value="Sports clothes">Sports clothes</option>
                                                        <option value="Swimwear">Swimwear</option>
                                                        <option value="Bridal wear">Bridal wear</option>
                                                        <option value="Sleep wear">Sleep wear</option>
                                                        </select>   
                                                    </div>
                                                
                                                    {errors.category.length > 0 && (
                                                    <span className="text-danger">{errors.category}</span>
                                                    )}
                                                </div>
                                            </div>
                                        
                                        <div className="row mt-4">
                                            <div className="col">
                                                <label className="form-label">Select the Quantity</label>
                                                <input className="form-control"
                                                type="number"
                                                range min="1"
                                                name="quantity"
                                                value={quantity}
                                                onChange={this.changeHandler}
                                                placeholder="Enter Quantity"
                                                required
                                                ></input>
                                            </div>
                                                                            
                                            <div className="col-md-7">
                                                <label className="form-label">Material</label>
                                                <input className="form-control"
                                                type="text"
                                                name="material"
                                                value={material}
                                                onChange={this.changeHandler}
                                                placeholder="Ex : Cotton,Wool,Denim"
                                                required
                                                ></input>
                                                {errors.material.length > 0 && (
                                                <span className="text-danger">{errors.material}</span>
                                                )}
                                            </div>
                                        </div>
                                        <div className="row 1 mt-4"></div>
                                            <div className="col-md-15 mt-4">
                                                <label className="form-label">Description </label>
                                                <input className="form-control"
                                                type="text"
                                                name="description"
                                                value={description}
                                                onChange={this.changeHandler}
                                                required
                                                ></input>
                                                {errors.description.length > 0 && (
                                                <span className="text-danger">{errors.description}</span>
                                                )}
                                            </div>
                                        <div>
                                            <button type="submit" 
                                            className="btn btn-success mt-3 container">Add New Item</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div> 
                    </div> 
                    <div className="col-6 mx-auto mt-5" >
                        <div style={{display:'flex', justifyContent: 'center',  alignItems: 'center'}}>
                            <img className="" style={{width:'80%'}} src={Items} />
                        </div>
                    </div>
                </div> 
            </div> 
           
        )
    }
}

export default AddItems