import React from 'react';
import './NavBar.css';

function NavBar(props) {
  return (
    <div className='Header'>
        <input type="text" placeholder="Search item" value={props.inputValue} onChange={props.onInputChange}></input>
        <button onClick={props.buttonClick} >search</button>
    </div>
  )
}

export default NavBar;




