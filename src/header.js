import React from 'react';
import SearchIcon from './img/SearchIcon.png';
import CartIcon from './img/CartIcon.png';
import UserProfileIcon from  './img/UserProfileIcon.png';
function Header() {
  return (
    <nav className="navbar navbar-expand-md py-4 fixed-top">
    <div className="container-fluid">
      <h3 className="d-inline align-middle text-white px-5">LOGO</h3>
      <button className="navbar-toggler" data-target="#one" data-toggle="collapse">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="one">
        <ul className="navbar-nav">
          <li className="nav-item"><a className="nav-link text-white" href="#">HOME</a></li>
          <li className="nav-item"><a className="nav-link text-white" href="#">STORE</a></li>
          <li className="nav-item"><a className="nav-link text-white" href="#">SELLER INFORMATION</a></li>
          <li className="nav-item"><a className="nav-link text-white" href="#">GLOBAL CATALOGUE</a></li>
          <li className="nav-item"><a className="nav-link text-white" href="#">STORE OWNER</a></li>
        </ul>
      </div>
      
      <div className="collapse navbar-collapse" id="one">
        <ul className="navbar-nav ml-auto pr-5">
          <li className="nav-item"><a className="nav-link text-white" href="#"><img src={SearchIcon} height="20" alt=""/> </a></li>
          <li className="nav-item"><a className="nav-link text-white" href="#"><img src={CartIcon} height="20" alt=""/></a></li>
          <li className="nav-item"><a className="nav-link text-white" href="#">HI, MARK <img src={UserProfileIcon} height="20" alt=""/> </a></li>
        </ul>
      </div>
    </div>
  </nav>
 
  );
}

export default Header;
