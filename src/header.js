import React from 'react';

function Header() {
  return (
    <nav className="navbar navbar-expand-md py-4 fixed-top">
    <div className="container-fluid">
      <h3 className="d-inline align-middle text-white px-5">LOGO</h3>
      <div className="collapse navbar-collapse" id="one">
        <ul className="navbar-nav">
          <li className="nav-item"><a className="nav-link text-white" href="#">HOME</a></li>
          <li className="nav-item"><a className="nav-link text-white" href="#">STORE</a></li>
          <li className="nav-item"><a className="nav-link text-white" href="#">SELLER INFORMATION</a></li>
          <li className="nav-item"><a className="nav-link text-white" href="#">GLOBAL CATALOGUE</a></li>
          <li className="nav-item"><a className="nav-link text-white" href="#">STORE OWNER</a></li>
        </ul>
      </div>
      <button className="navbar-toggler" data-target="#one" data-toggle="collapse">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="one">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item"><a className="nav-link text-white" href="#"><i className="fa fa-search"></i></a></li>
          <li className="nav-item"><a className="nav-link text-white" href="#"><i className="fa fa-shopping-cart"></i></a></li>
          <li className="nav-item"><a className="nav-link text-white" href="#">Hi Mark <i className="fa fa-user"></i> </a></li>
        </ul>
      </div>
    </div>
  </nav>
 
  );
}

export default Header;
