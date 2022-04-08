import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="social">
        <ul>
          <li>
            <a href="https://github.com/rohansingh2023">
              <i className="fa fa-github"></i>
            </a>
          </li>
          <li>
            <a href="https://twitter.com/RohanSingh2023">
              <i className="fa fa-twitter"></i>
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/rohan-singh-0b41a81b2/">
              <i className="fa fa-linkedin"></i>
            </a>
          </li>
        </ul>
      </div>
      <div className="textCenter">
        <p>&copy; 2022 Rohan Singh</p>
      </div>
    </div>
  );
};

export default Footer;
