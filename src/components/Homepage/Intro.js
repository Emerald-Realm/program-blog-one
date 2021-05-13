import React from "react";
import { NavLink } from "react-router-dom";
import { BaseButtonOne } from "../Templates/BaseButton/BaseButton";


function Intro() {
  return (
    <div className="home-intro flex-col-center gap3" >
      <h1 className="intro-header">Welcome, web Developer</h1>
      <p className="intro-text">Learn efficient coding and more.</p>
	 <NavLink to="/blog-list" exact >
      <BaseButtonOne buttonText="Start Now" buttonIcon=">>" />
    </NavLink>

    </div>
  );
}

export default Intro;
