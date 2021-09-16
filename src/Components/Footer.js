import React from "react";

function Footer() {
  const footerStyle = {
    backgroundColor: "black",
    // margin: "0",
    color: "white",
    padding: "3px",
  };
  return (
    <div style={footerStyle}>
      <p style={{ marginTop: "12px" }}>
        Made By <span>Anmol Sachan</span>
        <a
          href="https://www.linkedin.com/in/anmol-s-6a1250136/"
          target="_blank"
        >
          <i
            class="fab fa-linkedin"
            style={{ color: "white", margin: "0 5px 20px 10px" }}
          ></i>
        </a>
        <a href="https://github.com/hulksmash20" target="_blank">
          <i
            class="fab fa-github"
            style={{ color: "white", margin: "0 10px 20px 5px" }}
          ></i>
        </a>
      </p>
    </div>
  );
}

export default Footer;
