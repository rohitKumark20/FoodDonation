import React from 'react';
import { Link } from 'react-router-dom';
import navCSS from './Navbar.module.css';

const Navbar = () => {
<<<<<<< HEAD
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
=======
  return (
    <nav className={navCSS.navbar}>
      <div className={navCSS.navWrapper}>
        <div className="left">logo</div>
        <div className={navCSS.navlist}>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/Donors">Donors</Link></li>
            <li><Link to="/Beneficiary">Beneficiary</Link></li>
            <li><Link to="/aboutUs">About Us</Link></li> {/* Updated link for About Us */}
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
>>>>>>> fa20d1596674d6fd8d160a2e760f467a1aa42cc4

        <div className="right">
          <Link to="/login"><button className={navCSS.btn}>Login</button></Link>
          <Link to="/register"><button className={navCSS.btn}>Register</button></Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;