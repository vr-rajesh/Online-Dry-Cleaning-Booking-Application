import React, { Component } from 'react'
import { Navbar,Nav,NavDropdown } from 'react-bootstrap';
import {Link} from 'react-router-dom'

class CustomerNavigation extends Component {
    render() {
        return (
                <Navbar bg="dark" variant="dark" expand="lg">
                    <Navbar.Brand href="#home">&nbsp;&nbsp;Online Dry Cleaning Booking Application</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Navbar.Text>
                            <Link to="/home-customer" style={{textDecoration: "none"}}>Home</Link>
                        </Navbar.Text>
                        {/* <NavDropdown title="Services" style={{textDecoration: 'none'}}>
                            <NavDropdown.Item>Steam ironing</NavDropdown.Item>
                            <NavDropdown.Item>Dry cleaning</NavDropdown.Item>
                            <NavDropdown.Item>Shoe laundry</NavDropdown.Item>
                            <NavDropdown.Item>Deep cleaning</NavDropdown.Item>
                        </NavDropdown> */}
                        {/* <Navbar.Text>
                            <a href="https://goo.gl/maps/ZwByypk31zRLgVRb6" target="_blank" style={{textDecoration: "none"}}>Locate Us&nbsp;&nbsp;</a>
                        </Navbar.Text> */}
                        {/* <Navbar.Text>
                            <Link to="/about" style={{textDecoration: "none"}}>About Us&nbsp;&nbsp;</Link>
                        </Navbar.Text> */}
                    </Navbar.Collapse>
                </Navbar>
           
        )
    }
}

export default CustomerNavigation
