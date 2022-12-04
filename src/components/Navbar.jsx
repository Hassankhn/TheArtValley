import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="navig">
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="/" style={{fontSize:35}}>
            TheArt<em>V</em>alley
          </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse ms-5"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/">
                    Home
                  </Link>
                </li>

                <li className="Categories">
                  <Link className="nav-link" to="/categories">
                    Categories
                  </Link>
                </li>

                <li className="Contact us">
                  <Link className="nav-link" to="/contact">
                    Contact us
                  </Link>
                </li>
                <li className="About us">
                  <Link className="nav-link" to="/about">
                    About us
                  </Link>
                </li>
              </ul>
            </div>
            <form className="d-flex" role="search">
              <button className="btn btn-outline-success" type="submit">
                Connect wallet
              </button>
            </form>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
