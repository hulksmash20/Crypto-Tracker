import React from "react";
import logo from "./logo.jpg";

function Header({ changeSearch }) {
  const logoStyle = {
    width: "50px",
    marginRight: "20px",
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <img src={logo} alt="" style={logoStyle} />
        <a className="navbar-brand" href="#" style={{ marginRight: "1040px" }}>
          CryptoTracker
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
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <form className="d-flex">
            <input
              style={{ width: "250px" }}
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              onChange={(event) => {
                changeSearch(event.target.value);
              }}
            />
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Header;
