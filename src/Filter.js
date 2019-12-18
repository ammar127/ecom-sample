import React from 'react';
import FilterIcon from './img/FilterIcon.png'

function Filter() {

    return(
         
  <div className="row main-bg mb-5">
  <div className="container">
      <div className="main-header">
        <ul className="list-wrapper d-flex">
          <li>
            <h4 className="font-weight-bold text-dark text-center"> <img src={FilterIcon} height="25" alt=""/> FILTER BY:</h4>
          </li>
          <li>
            <div className="button-set pl-3">
              <a className="btn btn-outline-dark btn-block btn-clr">Top Sellers</a>
            </div>
          </li>
          <li>
            <div className="button-set">
              <a className="btn btn-outline-dark btn-block btn-blk">Top Interactions</a>
            </div>
          </li>
          <li>
            <div className="button-set">
              <a className="btn btn-outline-dark btn-block btn-clr">Favourites</a>
            </div>
          </li>
          <li>
            <div className="right-inner-addon">
              <i className="fa fa-search text-white"></i>
              <input  type="search" className="form-control form-content search"
                placeholder="Search"/>
            </div>
          </li>
          <li>
            <input type="radio" id="f-option" name="selector"/>
            <label for="f-option">Hot sellers now</label>
            
            <div className="check"></div>
          </li>
        </ul>     
      </div>
    </div>
  </div>

    );
}
export default Filter;