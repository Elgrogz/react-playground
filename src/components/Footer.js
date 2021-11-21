import React from "react";

const Footer = () => (
  <footer className="page-footer font-small blue mt-5 pt-4">
    <div className="container-fluid text-center text-md-left">
      <div className="row">
        <div className="col-md-6 mt-md-0 mt-3">
          <h5 className="text-uppercase">Disclaimer</h5>
          <p>
            This app is for purely informational purposes... and also for
            helping me learn React + CSS :) Please verify with an official
            source for up to date rules on traveling to and within the Schengen
            area
          </p>
        </div>

        <hr className="clearfix w-100 d-md-none pb-0" />

        <div className="col-md-6 mb-md-0 mb-3">
          <h5 className="text-uppercase">Links</h5>
          <ul className="list-unstyled">
            <li>
              <a href="https://github.com/Elgrogz/single-page-eu-travel-calculator">
                Code
              </a>
            </li>
            <li>
              <a href="https://ec.europa.eu/home-affairs/policies/schengen-borders-and-visa/visa-policy/entry-and-stay-schengen-area_en">
                More info about travel in the Schengen Area
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div className="footer-copyright text-center py-3">
      © 2021 Copyright: <a href="https://grogz.blog">Gregor Gilchrist</a>
    </div>
  </footer>
);

export default Footer;
