import React from 'react';


function Header() {
  return (
    <header style={headerStyle}>
      <h1>Simple React ToDo List</h1>
    </header>
  )
}

const headerStyle = {
  background: 'f5f5f5',
  color: '#2d2d2d',
  textAlign: 'center',
  padding: '10px',
  marginBottom: '4px',
  border: '2px solid #777777',
}


export default Header;