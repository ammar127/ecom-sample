import React from 'react';

function Left() {
    return (
        <div className="left-aside text-center">
          <div className="filter">
            <h2 className="font-weight-bold">FILTER BY<i className="fa fa-filter pl-2"></i></h2>
            <div className="btn-wrapper mt-3">
              <div className="button-set">
                <a className="btn btn-outline-dark btn-block">Top Sellers</a>
              </div>
              <div className="button-set">
                <a className="btn btn-outline-dark btn-block">Top Interactions</a>
              </div>
              <div className="button-set">
                <a className="btn btn-outline-dark btn-block">Favourites</a>
              </div>
            </div>
          </div>
        </div>
 
    );
}
export default Left;