import { Link } from "react-router-dom";
import React, { useEffect } from "react";

function Navbar() {
  // Remove body margin when Navbar mounts
  useEffect(() => {
    document.body.style.margin = "0";
  }, []);

  const navStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "beige",
    padding: "1rem",
    width: "100vw",
    boxSizing: "border-box",
    position: "fixed",
    top: 0, 
    left: 0, 
    zIndex: 1000

  };

  const linkStyle = {
    textDecoration: "none",
    color: "black",
    margin: "0 1rem",
    fontWeight: "bold",
  };

  return (
    <nav style={navStyle}>
      <span style={{ fontWeight: "bold" }}>My Blog</span>
      <div>
        <Link to="/" style={linkStyle}>Home</Link>
        <Link to="/create" style={linkStyle}>Create</Link>
        <Link to="/Blog" style={linkStyle}>Blog</Link>
      </div>
    </nav>
  );
}

export default Navbar;