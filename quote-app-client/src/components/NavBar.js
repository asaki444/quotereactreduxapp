import React from 'react';
import { NavLink } from 'react-router-dom';
const NavBar = () => {
  const link = {
    width: '100px',
    padding: '12px',
    margin: '0 6px 6px',
    textDecoration: 'none',
    color: 'gray'
  }
  return (
    <div className="navbar">
      <NavLink
      to="/"
      exact style={link}
      activeStyle={{
        background: 'darkblue'
      }}
    >Home</NavLink>
    <NavLink
      to="/quoteform"
      exact style={link}
      activeStyle={{
        background: 'darkblue'
      }}
    >New Quote</NavLink>
    <NavLink
      to="/authors"
      exact style={link}
      activeStyle={{
        background: 'darkblue'
      }}
    >Authors</NavLink>
    <NavLink
      to="/quotes"
      exact style={link}
      activeStyle={{
        background: 'darkblue'
      }}
    >Quotes</NavLink>
    </div>
  );
};

export default NavBar
