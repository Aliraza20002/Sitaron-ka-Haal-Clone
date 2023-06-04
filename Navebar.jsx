import React from "react";
import Logo from "../Assets/phoneHeaderLogo.7783232608d0ffe6b2fb.webp";
import "../style/Navebar.css";

function Navebar() {
  return (
    <div className="navebarborderset">
      <div className="container">
        <div className="navebar">
          <div className="Logo">
            <img src={Logo} alt="Sitaron ka khel" className="imglogo" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navebar;
