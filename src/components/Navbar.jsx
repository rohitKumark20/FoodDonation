import React from 'react';
import { Link } from 'react-router-dom';
import navCSS from './Navbar.module.css';

const Navbar = () => {
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

        <div className="right">
          <Link to="/login"><button className={navCSS.btn}>Login</button></Link>
          <Link to="/register"><button className={navCSS.btn}>Register</button></Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;