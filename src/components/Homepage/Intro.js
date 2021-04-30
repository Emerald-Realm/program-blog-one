import React from "react";
import { BaseButtonOne } from "../Templates/BaseButton/BaseButton";
function Intro() {
  return (
    <div className="home-intro flex-col-center gap3" >
      <h1 className="intro-header">Welcome, web Developer</h1>
      <p className="intro-text">Learn efficient coding and more.</p>
      <BaseButtonOne buttonText="Start Now" buttonIcon=">>" />
    </div>
  );
}

export default Intro;
