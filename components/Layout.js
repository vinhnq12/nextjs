import React from "react";
import Head from "next/head";
import Header from "./Header";

export default ({ children, title }) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta charSet="utf8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header />
      <div className="content">{children}</div>
    </div>
  );
};
