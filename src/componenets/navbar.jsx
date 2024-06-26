import React from 'react';

const Navbar = () => {
  const navbarStyle = {
    backgroundColor: '#f8f9fa',
    padding: '10px 20px',
    borderBottom: '1px solid #ccc',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  };

  const linkStyle = {
    color: '#333',
    textDecoration: 'none',
    margin: '0 10px'
  };

  return (
    <nav style={navbarStyle}>
      <div>
        <h2 style={{ margin: 0 }}>My Todos</h2>
      </div>
      <div>
        <a href="/" style={linkStyle}>Home</a>
        <a href="/About" style={linkStyle}>About</a>
        <a href="/Contact" style={linkStyle}>Contact</a>
      </div>
    </nav>
  );
}

export default Navbar;
