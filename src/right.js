import React from 'react';
import person1 from './img/person1.jpg'

function Right() {

    return(
        <div className="right-aside">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="right-inner-addon">
                <i className="fa fa-search text-white"></i>
                <input  type="search" className="form-control form-content search"
                  placeholder="Search" />
              </div>
            </div>
            <div className="col-md-6 text-center">
              <span className="font-weight-bold">Hot sellers now</span>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="card">
                <div className="card-body text-center">
                  <a href="#">
                    <img className="rounded-circle" src={person1} alt=""/>
                  </a>
                  <h3 className="pt-3">Morcus Lemonis</h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas officiis laboriosam, eius
                    perspiciatis dolorum unde nobis dolorem accusamus laborum reprehenderit.</p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card">
                <div className="card-body text-center">
                  <a href="#">
                    <img className="rounded-circle" src={person1} alt=""/>
                  </a>
                  <h3 className="pt-3">Morcus Lemonis</h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas officiis laboriosam, eius
                    perspiciatis dolorum unde nobis dolorem accusamus laborum reprehenderit.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="card">
                <div className="card-body text-center">
                  <a href="#">
                    <img className="rounded-circle" src={person1} alt=""/>
                  </a>
                  <h3 className="pt-3">Morcus Lemonis</h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas officiis laboriosam, eius
                    perspiciatis dolorum unde nobis dolorem accusamus laborum reprehenderit.</p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card">
                <div className="card-body text-center">
                  <a href="#">
                    <img className="rounded-circle" src={person1} alt=""/>
                  </a>
                  <h3 className="pt-3">Morcus Lemonis</h3>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas officiis laboriosam, eius
                    perspiciatis dolorum unde nobis dolorem accusamus laborum reprehenderit.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
     
    );
}
export default Right;