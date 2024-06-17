import React from 'react';
import { Link } from "react-router-dom";
import './Navbar.scss';
import LogoS from '../../assets/images/logo-s.png';

const Navbar = () => {
  return (
    <div className="nav-bar">
      <Link className="logo" to="/">
        <img src={LogoS} alt="logo" />
      </Link>
    </div>
  )
}

export default Navbar
