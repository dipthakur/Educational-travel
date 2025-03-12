import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { Link } from "react-router-dom";

function Navbar() {

  return (
    <>
      <nav className="navbar fixed-top navbar-expand-md">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">EduCorpTour</a>
    <button className="navbar-toggler d-md-none" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse d-none d-md-block ">
      <ul className="navbar-nav ms-auto gap-2">
        <li className="nav-item">
          <Link className="nav-link active" to="/" >Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/About">About Us</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/Destinations" >Destinations</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/TourPackage" >Tours & Packages</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/" >Gallery</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/Blogs" >Blog</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/Contact" >Contact Us</Link>
        </li>
        <li className="nav-item">
          <Link to="/Contact">
            <button className="btn nav-item-btn">BookNow</button>
          </Link>
        </li>

      </ul>
    </div>
    <div className="offcanvas offcanvas-end d-md-none" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
      <div className="offcanvas-header">
        <h5 className="offcanvas-title" id="offcanvasNavbarLabel">EduCorpTour</h5>
        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div className="offcanvas-body">
        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
        <li className="nav-item">
          <Link className="nav-link active" to="/" >Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/About">About Us</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/Destinations" >Destinations</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/TourPackage" >Tours & Packages</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/" >Gallery</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/Blogs" >Blog</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/Contact" >Contact Us</Link>
        </li>
        <li className="nav-item">
          <Link to="/Contact">
            <button className="btn nav-item-btn">BookNow</button>
          </Link>
        </li>

        </ul>
      </div>
    </div>
  </div>
</nav>


    </>
  );
}

export default Navbar;
