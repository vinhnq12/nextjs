import React from "react";
import NavLink from "./NavLink";

export default () => {
  return (
    <div className="nav">
      <style jsx>{`
        .nav .link {
          text-decoration: none;
          color: #000000;
        }
        .nav link.active {
          color: #ff0000;
        }
      `}</style>
      <NavLink activeClassName="active" href="/">
        <a className="link">Home</a>
      </NavLink>
      <NavLink activeClassName="active" href="/about">
        <a className="link">About</a>
      </NavLink>
    </div>
  );
};
