import React from 'react'
import navCSS from './Navbar.module.css'
import {Link} from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className={navCSS.navbar}>
            <div className={navCSS.navWrapper}>
                <div className="left"> <a href="/">Food Donation</a> </div>
                <div className={navCSS.navlist}>
                    <ul>
                        <Link to='/'><li>Home</li></Link>
                        <Link to='/donations'><li>Donors</li></Link>
                        <Link to='/request'><li>Beneficiary</li></Link>
                        <Link to='/about'><li>About Us</li></Link>
                        <Link to='/contact'><li>Contact</li></Link>
                    </ul>
                </div>

                <div className="right">
                    <Link to='/login'><button className={navCSS.btn}>Login</button></Link>
                    <Link to='/register'><button className={`${navCSS.btn}`}>Register</button></Link>
                </div>
            </div>
        </nav>
    )
}

export default Navbar