import React from "react";
import NavLink from "./NavLink";

export default () => {
  return (
    <div className="nav">
      <NavLink activeClassName="active" href="/">
        <a>Home</a>
      </NavLink>
      <NavLink activeClassName="active" href="/about">
        <a>About</a>
      </NavLink>
    </div>
  );
};
