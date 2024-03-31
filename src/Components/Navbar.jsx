import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Button from "./Button";
import { UserContext } from "../../context/userContext";

function Navbar() {
  const { user, setUser } = useContext(UserContext);
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const handleSignOut = () => {
    document.cookie = "token=; Max-Age=0;";
    setUser(null);
  };
  console.log(user);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
          GADGETHUB
          <i className="fa-solid fa-house-laptop" />
        </Link>
        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"} />
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/products"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Products
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/services"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Services
            </Link>
          </li>
          {user ? (
            <>
              <li className="nav-item">
                <span className="nav-links">Welcome, {user.name}</span>
              </li>
              <li className="nav-item">
                <Link
                  to="/"
                  className="nav-links sign-out-link"
                  onClick={handleSignOut}
                >
                  Sign Out
                </Link>
              </li>
            </>
          ) : (
            <>
              <li className="nav-item">
                <Link
                  to="/sign-in"
                  className="nav-links-mobile"
                  onClick={closeMobileMenu}
                >
                  Sign in
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/sign-up"
                  className="nav-links-mobile"
                  onClick={closeMobileMenu}
                >
                  Sign Up
                </Link>
              </li>
            </>
          )}
        </ul>
        {/* Conditionally render based on authentication status */}
        {user ? null : (
          <>
            <Button buttonStyle="btn--outline" to="/sign-in">
              SIGN IN
            </Button>
            <Button buttonStyle="btn--outline" to="/sign-up">
              SIGN UP
            </Button>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
