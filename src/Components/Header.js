import React from "react";
import logo from './../assets/img/logo.svg';
import './../assets/css/index.css';

function Header() {
    return(
      <nav className="flex flex-row justify-between" >
        <div className="flex flex-row">
            <img width='' src={logo} className="logo w-100" alt="logo" />
            <a>
              asd
            </a>
        </div>
        <div className="flex flex-row justify-end" >
          <a>asd</a>
          <a>asd</a>
          <a>asd</a>
        </div>
      </nav>
    );
}

export default Header;
