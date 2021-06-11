import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./home.scss";
import enjoyService from "../../assets/enjoy-service.png";
import Navbar from "../Navbar";
import { GiUsbKey } from "react-icons/gi";
import Footer from "../Footer";

class Home extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="base-container-home">
        <Navbar />
        <div
          className="alert alert-secondary alert-dismissible fade show text-center"
          role="alert"
        >
          In accordance with the latest Government guidelines on{" "}
          <strong>COVID-19</strong>, our services will be restricted in some
          locations
        </div>
        <div className="row display-first">
          <div className="col-lg-6 col-md-12 first-section">
            <h2>Welcome to ClothesCare,</h2>
            <h3>A place where Clothes live a Life Full of Whiteness.</h3>
            <h4>Some of Our Key Services are:-</h4>
            <ul>
              <li>Laundary</li>
              <li>Ironing</li>
              <li>Dry Cleaning</li>
            </ul>
          </div>
          <div className="col-lg-6 col-md-12 first-image">
            <img src={enjoyService} />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Home;
