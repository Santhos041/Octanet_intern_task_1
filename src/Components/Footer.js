import React from 'react';
import {Link} from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
 function Footer(){
    return(
        <div>
        <div id="contact" className="py-5 bg-light text-center mt-3">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 mb-4 mb-lg-0 ">
                <h5>Stoxx 101</h5>
                <ul className="contact-info list-unstyled">
                  <li><Link to="#" className="text-dark">stoxx@invest.works</Link></li>
                  <li><Link to="#" className="text-dark">+91 987625431</Link></li>
                </ul>
              </div>
              <div className="col-lg-4 col-md-6">
                <h5>Our Guidelines</h5>
                <ul className="links list-unstyled">
                  <li> <Link to="#" className="text-muted">Terms</Link></li>
                  <li> <Link to="#" className="text-muted">Privacy Policy</Link></li>
                  <li> <Link to="#" className="text-muted">Discover</Link></li>
                </ul>
              </div>
              <div className="col-lg-4 col-md-6">
                <h5>Our Address</h5>
                <i className="fa-solid fa-location-dot" /> 123 xx street xx city
                <ul className="link list-unstyled ">
                  <li> <Link to="#" className="fa-brands fa-instagram " /></li>
                  <li> <Link to="#" className="fa-brands fa-facebook" /></li>
                  <li> <Link to="#" className="fa-brands fa-twitter" /></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="py-5 bg-dark text-white">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-7 text-center text-md-left">
                <p className="mb-md-0">© All rights reserved-2024. Stoxx </p>
              </div>
              <div className="col-md-5 text-center text-md-right">
                <p className="mb-0"> Landing Page </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
 }
 export default Footer;