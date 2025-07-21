import React from 'react';
import { Link } from 'react-router-dom';
function Header(props) {
    return (
        <div>
              {/* Navbar */}
      <nav className="navbar bg-body-tertiary fixed-top" style={{paddingInline:'6%'}}>
        <div className="container-fluid">
          <a className="navbar-brand" to="#">
            <h2 className="text-primary fw-bold" >Travel Ft Phorn</h2>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div
            className="offcanvas offcanvas-end"
            tabIndex={-1}
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
                Travel Ft Phorn
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              />
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                </li>
                <li className="nav-item"> 
                  <Link className='nav-link' to="/destination">Destination</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/tours">Tours</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/meterial">Meterial</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/about">About Us</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/contact">Contact</Link>
                </li>
              </ul>
              <form className="d-flex mt-3" role="search">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-success" type="submit">Search</button>
              </form>
            </div>
          </div>
        </div>
      </nav>
        </div>
    );
}

export default Header;