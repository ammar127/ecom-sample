import React from 'react';
import Right from './right';
import Left from './left'
function Container() {
  return (
    <div className="row main-row">
    <div className="col-md-12">
      <div className="main-container">
        <Left />
        <Right />
		

	   <div className="row justify-content-center">
          <div className="pagination">
            <a href="#" className="rounded-circle-btn">prev</a>
            <a href="#" className="rounded-circle">1</a>
            <a href="#" className="rounded-circle">2</a>
            <a href="#" className="rounded-circle">3</a>
            <a href="#" className="rounded-circle">4</a>
            <a href="#" className="rounded-circle">5</a>
            <a href="#" className="rounded-circle-btn">next</a>
          </div>
        </div>
        <br/>
      </div>
    </div>
  </div>
  );
}

export default Container;
