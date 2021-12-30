import React from "react";

import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";

const Footer = () => (
  <footer className="footer">
    <Grid container>
      <Grid item xs>
        <h5>Disclaimer</h5>
        <p>
          This app is for purely informational purposes... and also for helping
          me learn React + CSS :) Please verify with an official source for up
          to date rules on traveling to and within the Schengen area
        </p>
      </Grid>
      <Divider orientation="vertical" flexItem />
      <Grid item xs>
        <h5>Links</h5>
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
      </Grid>
    </Grid>
    <div className="text-center">
      © 2021 Copyright: <a href="https://grogz.blog">Gregor Gilchrist</a>
    </div>
  </footer>
);

export default Footer;
