import React from "react";
import NavLink from "./NavLink";

export default () => {
  return (
    <div className="nav">
      <NavLink activeClassName="active" href="/">
        <a className="link">Home</a>
      </NavLink>
      <NavLink activeClassName="active" href="/about">
        <a className="link">About</a>
      </NavLink>
    </div>
  );
};
