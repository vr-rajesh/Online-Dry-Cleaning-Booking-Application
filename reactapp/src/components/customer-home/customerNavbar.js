import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import { GiClothes } from "react-icons/gi";
import {FaBars, FaTimes} from 'react-icons/fa'
import { Button } from '../Button'
import '../Navbar.css'
import {IconContext} from 'react-icons/lib';

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);
    

    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false)

    const showButton = () =>{
        if(window.innerWidth <= 960){
            setButton(false);
        }else {
            setButton(true);
        }
    }
    const logOut = () =>{
        window.localStorage.clear();
        sessionStorage.clear();
    }
    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener('resize', showButton)

    return (
        <>
            <IconContext.Provider value={{color: '#fff'}}>
                <div className='navbar p-0'>
                    <div className='navbar-container container'>
                        <Link to='/' className='navbar-logo mb-2' onClick={closeMobileMenu}>
                            <GiClothes className= 'navbar-icon' /> ClothesCare
                        </Link>
                        <div className='menu-icon' onClick={handleClick}>
                            {click ? <FaTimes /> : <FaBars />}
                        </div>
                        <ul className={click ? 'nav-menu active': 'nav-menu'}>
                            <li className='nav-item'>
                                <Link to='/addItems' className='nav-links' onClick={closeMobileMenu}>
                                    Add Item to Card
                                </Link>
                            </li>
                            <li className='nav-item'>
                                <Link to='/addBooking' className='nav-links' onClick={closeMobileMenu}>
                                Schedule a Pickup
                                </Link>
                            </li>
                            {/* <li className='nav-item'>
                                <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                                    Price List
                                </Link>
                            </li> */}
                            <li className='nav-item'>
                                <Link to='/placeOrder' className='nav-links' onClick={closeMobileMenu}>
                                    Place Order
                                </Link>
                            </li>
                            {/* <li className='nav-item'>
                                <div className="nav-links dropdown">
                                    <button className="dropbtn nav-links" style={{paddingRight:'0px', paddingLeft:'0px'}}>Update</button>
                                    <div className="dropdown-content">
                                        <Link to='/updateCustomer' onClick={closeMobileMenu}>Your Details</Link>
                                        <Link to='/updateBooking' onClick={closeMobileMenu}>Booking Details</Link>
                                        <Link to='/updateItems' onClick={closeMobileMenu}>Item Details</Link>
                                    </div>
                                </div>
                            </li> */}
                            <li className='nav-item'>
                                <Link to='/' className='nav-links' onClick={logOut}>
                                    Sign Out
                                </Link>
                            </li>

                        </ul>
                    </div>
                </div>
            </IconContext.Provider>
        </>
    )
}

export default Navbar;
