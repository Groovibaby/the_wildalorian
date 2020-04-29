import React from 'react';
import logoPng from "../img/logo-wildalorian3.png";
import "../style.css";

 const Header = () => {
  return (
    <div className="Header">
      <img src={logoPng} className="Header_logo"  alt="logo"/>
 
    </div>
  )
}

export default Header;