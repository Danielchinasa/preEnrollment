import React from "react";
import {
  Link
} from "react-router-dom";
import Logo from '../assets/logo.png'

const Nav = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo03"
          aria-controls="navbarTogglerDemo03"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <Link to="/" class="navbar-brand" href="#">
          <img src={Logo} height="50px" alt="" />
        </Link>
        <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          </ul>
          <form class="d-flex">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <Link to="/auth" class="nav-link active" aria-current="page">Fill Form
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/" class="nav-link active" aria-current="page" href="#">Help
              </Link>
            </li>
          </ul>
            
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
