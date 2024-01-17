import React from "react";
import CompLogo from "../image/logo.png"
const Footer = () => {
  return (
    <>
      <div className="Footer">
        <div className="container footer-h">
          <div className="row">
            <div className="col-md-6 col-lg-5 col-12 ft-1">
              <h3>
                <span><img src={CompLogo} alt="footer img"/></span>UPRO
              </h3>
              <p>
                The Ultrapro is all about community.It's made up of people from
                all different backgrounds and interests.
              </p>
              <div className="footer-icons">
                <i class="fa-brands fa-facebook"></i>
                <i class="fa-brands fa-twitter"></i>
                <i class="fa-brands fa-instagram"></i>
                <i class="fa-brands fa-linkedin-in"></i>
              </div>
            </div>
            <div className="col-md-6 col-lg-2 col-12 ft-2">
              <h5>Navigation</h5>
              <ul>
                <li className="nav-item">
                  <a className="" href="/">
                    About us
                  </a>
                </li>
                <li className="nav-item">
                  <a className="" href="/">
                    What we do
                  </a>
                </li>
                <li className="nav-item">
                  <a className="" href="/">
                    News
                  </a>
                </li>
                <li className="nav-item">
                  <a className="" href="/">
                    Projects
                  </a>
                </li>
                <li className="nav-item">
                  <a className="" href="/">
                    FAQ
                  </a>
                </li>
                <li className="nav-item">
                  <a className="" href="/">
                    Offices
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-6 col-lg-2 col-12 ft-2">
              <h5>Resources</h5>
              <ul>
                <li className="nav-item">
                  <a className="" href="/">
                    About us
                  </a>
                </li>
                <li className="nav-item">
                  <a className="" href="/">
                    What we do
                  </a>
                </li>
                <li className="nav-item">
                  <a className="" href="/">
                    News
                  </a>
                </li>
                <li className="nav-item">
                  <a className="" href="/">
                    Projects
                  </a>
                </li>
                <li className="nav-item">
                  <a className="" href="/">
                    FAQ
                  </a>
                </li>
                <li className="nav-item">
                  <a className="" href="/">
                    Offices
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-6 col-lg-3 col-12 ft-4">
              <h5>Contact Info</h5>
              <p>IFZA Dubai Silicon Oasis, Dubai, United Arab Emirates</p>
              <p>Telephone : + (012) 345 6789</p>
              <p>Fax : + (012) 345 6789</p>
              <p>Email : XYZ@upro.com</p>
            </div>
          </div>
        </div>
      <div className="Last-footer">
        <p>Copyright ©2023 Ultrapro. All right reserved</p>
      </div>
      </div>
    </>
  );
};

export default Footer;
