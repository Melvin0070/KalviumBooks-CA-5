import React, { useState } from 'react';
import Logo from '../assets/logo.png';
import "./Navbar.css";
import { NavLink } from 'react-router-dom';

function Navbar({ onSearch }) {
  const [searchInput, setSearchInput] = useState('');

  const handleInputChange = (event) => {
    setSearchInput(event.target.value);
  };

  const handleSearch = () => {
    onSearch(searchInput);
  };

  return (
    <div>
      <nav>
        <NavLink to="/"><img src={Logo} alt="" width={'200px'}/></NavLink>
        <div>
        <input type="text" value={searchInput} onChange={handleInputChange}/>
        <button onClick={handleSearch}>Search</button>
        </div>
        <NavLink to="/register"><button>Register</button></NavLink>
      </nav>
    </div>
  );
}

export default Navbar;
