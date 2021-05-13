import React from "react";
import { BaseButtonOne } from "../Templates/BaseButton/BaseButton";
import imageOne from '@images/blogs/banner.png'
import imageTwo from '@images/blogs/banner2.png'


function AboutUs() {
  return (
    <div className="about-us flex-col gap2">
      <div className="about-intro flex-col-center gap5">
        <p className="about-title t-center dark h3-bold">About Us</p>
        <p className="about-intro-context">
          ProgramRlmBlog helps web developers to write better code, with faster
          loading time.
        </p>
        <img src={imageTwo} loading='lazy' alt='abt-img' />
      </div>
      <div className="about-who flex-col-center gap5">
        <p className="about-who-title t-center dark h4-bold">Who We Are</p>
        <p className="about-who-context">
          The ProgramRlm aims to be the go to place for every web development
          related event and actions.
        </p>
        <img src={imageOne} loading='lazy' alt='abt-img' />
      </div>
      <div className="about-join flex-col-center gap5">
        <p className="about-join-title t-center dark h4-normal">You are Welcome to join us</p>
        <p className="about-join-context t-left">
          We are seeking to push web creation, design and development to the
          limits without compromising the standard and speed of the web
          applications.
        </p>
        <BaseButtonOne buttonText='JOIN US' />
      </div>
    </div>
  );
}

export default AboutUs;
