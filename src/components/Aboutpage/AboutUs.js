import React from "react";
import { BaseButtonOne } from "../Templates/BaseButton/BaseButton";

function AboutUs() {
  return (
    <div className="about-us flex-col gap2">
      <div className="about-intro">
        <p className="about-title t-center h3">About Us</p>
        <p className="about-intro-context">
          ProgramRlmBlog helps web developers to write better code, with faster
          loading time
        </p>
      </div>
      <div className="about-who">
        <p className="about-who-title t-center h4">Who We Are</p>
        <p className="about-who-context">
          The ProgramRlm aims to be the go to place for every web development
          related event and actions.
        </p>
        <img src='#' alt='abt-img' />
      </div>
      <div className="about-join flex-col-center gap5">
        <img src='#' alt='abt-img' />
        <p className="about-join-title t-center h4">You are Welcome to join us</p>
        <p className="about-join-context">
          We are seeking to push web creation, design and development to the
          limits without compromising the standard and speed of the web
          application
        </p>
        <BaseButtonOne buttonText='JOIN US' />
      </div>
    </div>
  );
}

export default AboutUs;
