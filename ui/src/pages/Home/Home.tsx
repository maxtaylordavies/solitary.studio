import React from "react";
import { Link } from "react-router-dom";

import logo from "../../logo.svg";
import "./home.css";

export const Home = () => {
  return (
    <div className="home">
      <img src={logo} className="big-logo" alt="logo" />
      {_Link("home", "/", { top: 20, left: 20 })}
      {_Link("projects", "/projects", { top: 20, right: 20 })}
      {_Link("about", "/about", { bottom: 20, left: 20 })}
      {_Link("contact", "/contact", { bottom: 20, right: 20 })}
    </div>
  );
};

const _Link = (text: string, url: string, style: object) => {
  return (
    <Link
      to={url}
      style={{ position: "absolute", ...style }}
      className="nav-link"
    >
      {text}
    </Link>
  );
};
