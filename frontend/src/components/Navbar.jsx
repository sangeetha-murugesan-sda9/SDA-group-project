import { React } from "react";

import navLogo from "../assets/img/logo/instyle.svg";

export default function Navbar() {
  return (
    <div>
      <nav>
        <div></div>
        {/* <img id="nav-logo" src={navLogo}></img> */}

        <div id="nav-main-title">
          <h3><strong>[In]Style</strong></h3>
                    {/* <p> Be the one</p> */}
        </div>
      </nav>
    </div>
  );
}
