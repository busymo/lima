import React from "react";

export const Navigation = (props) => {
  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            {" "}
            <span className="sr-only">Toggle navigation</span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
          </button>
          <a className="navbar-brand page-scroll" href="#page-top" style={{position: "absolute", top: "0", left: "0"}}>
          <img src="img/logo/lima.png" alt="Logo" style={{height: "60px", display: "inline-block"}}/>
            <span style={{display:"inline-block", marginLeft: "0px", lineHeight: "60px"}}>Lima </span>
          </a>{" "}
        </div>

        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right">
          <li>
              <a href="#about" className="page-scroll">
              ÜBER UNS
              </a>
            </li>
            <li>
              <a href="#services" className="page-scroll">
                DIENSTLEISTUNGEN
              </a>
            </li>
            <li>
              <a href="#gallery" className="page-scroll">
                Gallery
              </a>
            </li>
            <li>
              <a href="#contact" className="page-scroll">
                Kontakt
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
