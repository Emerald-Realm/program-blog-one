import React from "react";

import { BaseLanguageCard } from "../Templates/BaseLanguage/BaseLanguage";

import html from "@images/logos/html5.png";
import css from "@images/logos/css3.png";
import js from "@images/logos/javascript.png";
import react from "@images/logos/react.png";
import vue from "@images/logos/vue.png";
import { NavLink } from "react-router-dom";

function HomeLanguage() {
  return (
    <div className="home-language flex-col gap6">
      <ul className="language-navbar h5-bold">
        <NavLink
          to="/html"
          exact
          className="language-link"
          activeClassName="active-language-link"
        >
          <li className="language-nav-item">HTML</li>
        </NavLink>
        <NavLink
          to="/css"
          exact
          className="language-link"
          activeClassName="active-language-link"
        >
          <li className="language-nav-item">CSS</li>
        </NavLink>
        <NavLink
          to="/js"
          exact
          className="language-link"
          activeClassName="active-language-link"
        >
          <li className="language-nav-item">JS</li>
        </NavLink>
        <NavLink
          to="/react"
          exact
          className="language-link"
          activeClassName="active-language-link"
        >
          <li className="language-nav-item">REACT</li>
        </NavLink>
        <NavLink
          to="/vue"
          exact
          className="language-link"
          activeClassName="active-language-link"
        >
          <li className="language-nav-item">VUE</li>
        </NavLink>
      </ul>
      <div className="languages-card gap3">
        <NavLink to="/html" exact>
          <BaseLanguageCard language="HTML 5" image={html} alt="html 5 logo" />
        </NavLink>
        <NavLink to="/css" exact>
          <BaseLanguageCard language="CSS 3" image={css} alt="css 3 logo" />
        </NavLink>
        <NavLink to="/js" exact>
          <BaseLanguageCard language="JAVASCRIPT" image={js} alt="js logo" />
        </NavLink>
        <NavLink to="/react" exact>
          <BaseLanguageCard language="REACT" image={react} alt="react js logo"/>
        </NavLink>
        <NavLink to="/vue" exact>
          <BaseLanguageCard language="VUE" image={vue} alt="vue js logo" />
        </NavLink>
      </div>
    </div>
  );
}

export default HomeLanguage;
