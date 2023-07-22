import React from "react";
import { FaInstagram, FaFacebookF, FaWhatsapp, FaTiktok } from "react-icons/fa";
const Footer = () => {
  return (
    <footer>
      <div className="container" style={{ height: "100%" }}>
        <div className="row py-5" style={{ height: "100%" }}>
          <div className="col-lg-3 col-6 col-md-4 footer-container ">
            <div>
              <h1>Kamidancer</h1>
            </div>
          </div>
          <div className="col-lg-3 col-6 col-md-4  footer-container ">
            <div className="social-media-container">
              <h2>Social Media</h2>
              <div className="social-media">
                <FaInstagram />
                <FaFacebookF />
                <FaTiktok />
                <FaWhatsapp />
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-6 col-md-4  footer-container ">
            <h2>Temukan kami</h2>
            <div></div>
          </div>
          <div className="col-lg-3 col-6 col-md-4  footer-container ">
            <h2>Layanan</h2>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
