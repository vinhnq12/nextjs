import { useRouter } from "next/router";
import Link from "next/link";
import React, { Children } from "react";

const NavLink = ({ children, ...props }) => {
  const { pathname } = useRouter();
  const child = Children.only(children);
  const childClassName = child.props.className || "";
  const className =
    pathname === props.href
      ? `${childClassName} ${props.activeClassName}`.trim()
      : childClassName;

  return (
    <Link {...props}>
      {React.cloneElement(child, {
        className: className || null
      })}
    </Link>
  );
};

export default NavLink;
