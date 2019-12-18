import React from 'react';
import FacebookIcon from './img/FacebookIcon.png';
import InstagramIcon from './img/InstagramIcon.png';
import TwitterIcon from './img/TwitterIcon.png';
import YoutubeIcon from './img/YoutubeIcon.png';
import AmericanExpressIcon from './img/AmericanExpressIcon.png';
import DiscoverIcon from './img/DiscoverIcon.png';
import MasterCardIcon from './img/MasterCardIcon.png';
import VisaIcon from './img/VisaIcon.png';



function Footer() {
  return (
    <footer id="footer" className="footer-1">
    <div className="main-footer bg-dark text-white">
      <div className="container">
        <div className="row justify-content-center">
          <h1 className="pt-5 pb-4">LOGO</h1>
        </div>
        <div className="row">
          <div className="col-xs-12 col-sm-6 col-md-3">
            <div className="content-clr">
              <ul>
                <li>
                  <div><a href="#.">HOME</a></div>
                </li>
                <li>
                  <div><a href="#.">ABOUT US</a></div>
                </li>
                <li>
                  <div><a href="#.">FAQ</a></div>
                </li>
                <li>
                  <div><a href="#.">SELLER INFORMATION</a></div>
                </li>
                <li>
                  <div><a href="#.">GLOBAL CATALOGUE</a></div>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-xs-12 col-sm-6 col-md-3">
            <div className="content-clr">
              <ul>
                <li>
                  <div><a href="#.">LOGIN</a></div>
                </li>
                <li>
                  <div><a href="#.">SIGN UP</a></div>
                </li>
                <li>
                  <div><a href="#.">STORE</a></div>
                </li>
                <li>
                  <div><a href="#.">STORE OWNER</a></div>
                </li>
              </ul>
              
            </div>
          </div>

          <div className="col-xs-12 col-sm-6 col-md-3">
            <div className="content-clr">
              <ul>
                <li>
                  <div><a href="#.">NEWSLETTER SIGN UP</a></div>
                </li>
                <li>
                    <div className="right-inner">
                      <a href="#" className="btn">Send</a>
                      <input type="search" className="form-control form-content-btn"
                        placeholder="Enter your e-mail" />
                    </div>
                   
                </li>
              </ul>
            </div>
          </div>

          <div className="col-xs-12 col-sm-6 col-md-3">

            <div>
              <span>FOLLOW US</span>
              <ul className="social-footer2 mb-4">
                <li className=""><a href="https://www.facebook.com/" title="Facebook">
                  <img src={FacebookIcon} height="25" alt=""/>
                  </a>
                </li>
                <li className=""><a title="instagram" href="https://www.instagram.com/">
                  <img src={InstagramIcon} height="25" alt=""/>
                  </a>
                </li>
                <li className=""><a href="https://twitter.com"  title="Twitter">
                  <img src={TwitterIcon} height="25" alt=""/>
                  </a>
                </li>
                <li className=""><a title="youtube"  href="https://www.youtube.com/">
                  <img src={YoutubeIcon} height="25" alt=""/>
                  </a>
                </li>
              </ul>
              <div className="credit-card">
                <ul className="social-footer2">
                  <li className=""><a href="#">
                    <img src={AmericanExpressIcon} height="30" alt=""/>
                    </a>
                  </li>
                  <li className=""><a href="#">
                    <img src={DiscoverIcon} height="30" alt=""/>
                    </a>
                  </li>
                  <li className=""><a href="#">
                    <img src={MasterCardIcon} height="30" alt=""/>
                    </a>
                  </li>
                  <li className=""><a  href="#">
                    <img src={VisaIcon} height="30" alt=""/>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        </div>
        </div>
    
   

    <div className="copyright-footer bg-dark text-white">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-sm-6 col-md-3">
            <p>Privecy policy</p>
          </div>
          <div className="col-xs-12 col-sm-6 col-md-3">
            <p>Cookie policy</p>
          </div>
          <div className="col-xs-12 col-sm-6 col-md-3">
            <p>Terms & Conditions</p>
          </div>
          <div className="col-xs-12 col-sm-6 col-md-3">
            <p>Copyright © Name</p>
          </div>
          
        </div>
      </div>
    </div>
  </footer>
  );
}

export default Footer;
