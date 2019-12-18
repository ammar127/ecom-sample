import React from 'react';
import Filter from './Filter';
import Home from './Home'
import Footer from './footer'
function Container() {
  return (
    <div className="row main-row">
    <div className="col-md-12">
      <div className="main-container">
        <Filter /> 
		<Home/>
        <Footer />
	   
      </div>
    </div>
  </div>
  );
}

export default Container;
