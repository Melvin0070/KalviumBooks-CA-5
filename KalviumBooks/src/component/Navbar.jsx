import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../assets/logo.png';

const Navbar = ({ searchInput, handleInputChange }) => {
  return (
    <nav>
      <NavLink to="/">
        <img src={Logo} alt="" width={'200px'}/>
      </NavLink>
      <div>
        <input type="text" value={searchInput} onChange={handleInputChange} placeholder='Search your book... 🔍' />
      </div>
      <NavLink to="/register"><button>Register</button></NavLink>
    </nav>
  );
};

export default Navbar;
