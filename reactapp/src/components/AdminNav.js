import React, { Component } from 'react'
import { Navbar} from 'react-bootstrap';
import {Link} from 'react-router-dom'
class AdminNav extends Component {
    render() {
        return (
            <Navbar bg="dark" variant="dark" expand="lg">
                    <Navbar.Brand href="#home">&nbsp;&nbsp;&nbsp;&nbsp;Online Dry Cleaning Booking Application</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Navbar.Text>
                            <Link to="/home-admin" style={{textDecoration: "none"}}>Home&nbsp;&nbsp;&nbsp;&nbsp;</Link>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Navbar>
        )
    }
}

export default AdminNav
