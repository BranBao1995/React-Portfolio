import React from "react";
import Navigation from "./Navigation";
import "./Header.css";
import logo from "../../images/logo-no-bg.png";

function Header(props) {
  const clickLinkHandler = (navItem) => {
    props.onSetPage(navItem);
  };

  return (
    <header className="header">
      <img className="logo" src={logo} alt="personal logo"></img>
      <Navigation
        activeLink={props.pageActive}
        onClickHandler={clickLinkHandler}
      />
    </header>
  );
}

export default Header;
