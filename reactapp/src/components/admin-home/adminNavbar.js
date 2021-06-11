import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import { GiClothes } from "react-icons/gi";
import {FaBars, FaTimes} from 'react-icons/fa'
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
                            {/* <li className='nav-item'>
                                <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                                    Home
                                </Link>
                            </li> */}
                            <li className='nav-item'>
                                <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                                    Logout
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
