import React from "react";
import Navigation from "./Navigation";
import "./Header.css";

function Header(props) {
  const clickLinkHandler = (navItem) => {
    props.onSetPage(navItem);
  };

  return (
    <header className="header">
      <h1 className="header-h1">My Portfolio</h1>
      <Navigation
        activeLink={props.pageActive}
        onClickHandler={clickLinkHandler}
      />
    </header>
  );
}

export default Header;
