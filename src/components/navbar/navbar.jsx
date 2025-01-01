 import React, { useState } from "react";
 import { Link } from "react-router-dom";
//  import NavItems from "./navitems";

 import "./navbar.css";



const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="navBar">
      <nav className="navBar-container">
        <div className="nav-background">
          <button className="menu-toggle" onClick={toggleMenu}>
          {isMenuOpen ? "✖" : "☰"}
          </button>
          <ul className={`nav-list ${isMenuOpen ? "open" : ""}`}>
            <li className="nav-item">
              <Link to="/home" onClick={() => setIsMenuOpen(false)}>Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/movies" onClick={() => setIsMenuOpen(false)}>Movies</Link>
            </li>
            <li className="nav-item">
              <Link to="/people" onClick={() => setIsMenuOpen(false)}>Characters</Link>
            </li>
            <li className="nav-item">
              <Link to="/planets" onClick={() => setIsMenuOpen(false)}>Planets</Link>
            </li>
            <li className="nav-item">
              <Link to="/species" onClick={() => setIsMenuOpen(false)}>Species</Link>
            </li>
            <li className="nav-item">
              <Link to="/starships" onClick={() => setIsMenuOpen(false)}>Starships</Link>
            </li>
            <li className="nav-item">
              <Link to="/vehicles" onClick={() => setIsMenuOpen(false)}>Vehicles</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

