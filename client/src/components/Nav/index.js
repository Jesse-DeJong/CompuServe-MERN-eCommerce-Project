import React from "react";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";

function Nav() {

  function showNavigation() {
    if (Auth.loggedIn()) {
      return ( <>

        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link" aria-current="Home" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" aria-current="Products" to="/products">Products</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" aria-current="Order History" to="/orderHistory">Order History</Link>
          </li>
        </ul>
        <form className="d-flex justify-content-end">
          <button className="btn btn-outline-danger" type="submit" onClick={() => Auth.logout()}>Logout</button>
        </form>
      
      </>
      );
    } else {
      return ( <>

        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link" aria-current="Home" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" aria-current="Products" to="/products">Products</Link>
          </li>
        </ul>
        <form className="d-flex justify-content-end">
          <Link to="/signup"><button className="btn btn-outline-info" type="submit">Sign Up</button></Link>
          <Link to="/login"><button className="btn btn-outline-success" type="submit">Login</button></Link>
        </form>
      
      </>
      );
    }
  }

  return ( <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">StoreTitle</Link>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          {showNavigation()}
        </div>
      </div>
    </nav>
  </>
  );
};

export default Nav;
