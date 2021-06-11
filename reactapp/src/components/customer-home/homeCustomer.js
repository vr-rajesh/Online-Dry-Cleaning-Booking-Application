import React from 'react'
import "bootstrap/dist/css/bootstrap.css";
import { Button } from '../Button'
import './homecustomer.scss'
import enjoyService from '../../assets/enjoy-service.png'
import schedulePickup from '../../assets/schedule_pickup.png'
import searchOutlet from '../../assets/searching-outlets.png'
import washDelivery from '../../assets/wash-delivery.png'
import { FaUsers, FaBookOpen, FaMoneyBillAlt, FaPenSquare, FaMoneyCheck } from "react-icons/fa";
import axios from 'axios'
import CustomerNavbar from './customerNavbar'

class CustomerHome extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return <div className="base-container-user">
            <CustomerNavbar />
            <div className="row row-user">
                <div className="col-lg-6 col-md-6">
                    <h3 className="text-center"><span className="number-user">1</span>&nbsp;Add Items to your cart</h3>
                    <div className="each-card-user">
                        <img className="text-center image-customer-1" src={searchOutlet} />
                    </div>
                </div>
                <div className="col-lg-6 col-md-6">
                    <h3 className="text-center"><span className="number-user">2</span>&nbsp;Schedule a Doorstep Pickup of your Items</h3>
                    <div className="each-card-user">
                        <img className="image-customer" src={schedulePickup} />
                    </div>
                </div>
                <div className="col-lg-6 col-md-6">
                    <h3 className="text-center"><span className="number-user">3</span>&nbsp;Just sit back at home and Enjoy our service</h3>
                    <div className="each-card-user">
                        <img className="image-customer" src={enjoyService} />
                    </div>
                </div>
                <div className="col-lg-6 col-md-6">
                    <h3 className="text-center"><span className="number-user">4</span>&nbsp;DoorStep Delivery of the Serviced Items</h3>
                    <div className="each-card-user">
                        <img className="image-customer" src={washDelivery} />
                    </div>
                </div>
            </div>
        </div>
    }
}

export default CustomerHome;