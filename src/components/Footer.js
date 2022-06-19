import React from "react";

const Footer = () => (
  <footer className="bg-blue-500 mt-4 py-4">
    <div className="grid grid-cols-2 text-center gap-4">
      <div>
        <div className="text-2xl">Disclaimer</div>
        <p>
          This app is for purely informational purposes... and also for helping
          me learn React + CSS :) Please verify with an official source for up
          to date rules on traveling to and within the Schengen area
        </p>
      </div>
      <div>
        <div className="text-2xl">Links</div>
        <ul>
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
    <div className="text-center pt-4">
      © 2021 Copyright: <a href="https://grogz.blog">Gregor Gilchrist</a>
    </div>
  </footer>
);

export default Footer;
