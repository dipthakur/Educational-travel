import React from 'react';
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
    
    <footer className="footer">
        <div className="footer-container">
            <div className="footer-section">
                <h3>Quick Links</h3>
                <div className="footer_quickLink_ul">
                    <ul>
                        <li><Link className="nav-link-footer" to="/About">About Us</Link></li>
                        <li><Link className="nav-link" to="/Contact" >Privacy Policy</Link></li>
                        <li><Link className="nav-link" to="/Contact" >Support</Link></li>
                        <li><Link className="nav-link" to="/Contact" >Client</Link></li>
                    </ul>
                    <ul>
                        <li><Link className="nav-link" to="/Contact" >FAQ</Link></li>
                        <li><Link className="nav-link" to="/Contact" >Journey Rule</Link></li>
                        <li><Link className="nav-link-footer" to="/Blogs" >Blog</Link></li>
                        <li><Link className="nav-link" to="/Contact" >Testimonials</Link></li>
                    </ul>
                </div>
            </div>
            <div className="footer-section">
                <h3>Customer Support</h3>
                <p>Get in touch with us to craft your desired tour.</p>
                <a href="tel:+91-9748586298" className="phone-link">
                    <i className="bi bi-telephone"></i> +91-9718675553
                </a>
            </div>
            <div className="footer-section">
                <h3>Follow Us</h3>

                <div className="social-icon-all-f d-flex">
                    <a href="#" className="social-icon"><i className="bi bi-facebook"></i></a>
                    <a href="#" className="social-icon"><i className="bi bi-youtube"></i></a>
                    <a href="#" className="social-icon"><i className="bi bi-instagram"></i></a>
                    <a href="#" className="social-icon"><i className="bi bi-linkedin"></i></a>
                </div>
                <div className="payment-icons">
                    <a href="#">
                        <img src="/assets/card-img/footer_2-image-1.png.png" alt="Visa" />
                    </a>
                </div>
            </div>
        </div>
        <div className="footer-bottom" id="scrollTarget" >
            <p>Copyright © 2025 <span>educorptour</span>. All Rights Reserved.</p>
        </div>
    </footer>

    
    </>
  )
}

export default Footer