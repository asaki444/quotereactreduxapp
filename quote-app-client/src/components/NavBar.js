import React from 'react';
import { NavLink } from 'react-router-dom';
const NavBar = () => {
  return (
    <div className="navbar">
      <NavLink
      to="/"
      activeStyle={{
        background: 'darkblue'
      }}
    >Home</NavLink>
    <NavLink
      to="/quoteform"
      activeStyle={{
        background: 'darkblue'
      }}
    >New Quote</NavLink>
    <NavLink
      to="/authors"
      activeStyle={{
        background: 'darkblue'
      }}
    >Directors</NavLink>
    <NavLink
      to="/quotes"
      activeStyle={{
        background: 'darkblue'
      }}
    >Quotes</NavLink>
    </div>
  );
};

export default NavBar
