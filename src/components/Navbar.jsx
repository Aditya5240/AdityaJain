import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaHome } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event) => {
    if (!event.target.closest(".navBar") && isOpen) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);


    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]); 

  return (
    <div className="container">
      <nav className="navBar">
        <Link to="/" className="navLogo link"><FaHome style={{ fontSize: '25px' }} />
</Link>

        <button className="menuButton" onClick={toggleMenu}>
          <FaBars />
        </button>

        <div className={`navLinks ${isOpen ? 'show' : ''}`}>
          <Link to="/" className="link">Home</Link>
          <Link to="/about" className="link">About-Me</Link>
          <Link to="/skill" className="link">Skills</Link>
          <Link to="/project" className="link">Project</Link>
          <Link to="/contact" className="link">Contact</Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
