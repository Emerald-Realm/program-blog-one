import React, { useContext } from "react";
import { GlobalContext } from "../../App";
import Navbar from './Navbar'

function Header() {
  const globalContext = useContext(GlobalContext);

  const handleMenu = () => {
    globalContext.globalDispatch("menu_Change");
  };

  return (
    <div className="header">

      <div className="logo-row">
        <button className="logo">PROGRAM RLM BLOG</button>
        <button className="menu-button" onClick={handleMenu}>
          {globalContext.globalState.menuStatus ? "Close" : "Menu"}
        </button>
      </div>
      <Navbar />


    </div>
  );
}

export default Header;
