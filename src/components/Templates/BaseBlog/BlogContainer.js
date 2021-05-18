import React from "react";
import { BaseThreeTags } from '../BaseTags/BaseTags'

function BlogContainer(props) {
  return (
    <div className="blog-container">
      <div className="base-intro flex-col-center gap6">
        <BaseThreeTags tagOne={props.tagOne} tagTwo={props.tagTwo} tagThree={props.tagThree} />
        <div className="blog-title h3">{props.title}</div>
        <div className="blogger">
          <p className="blog-poster">{props.name}</p>
          <img loading='lazy' src={props.bloggerImage} alt={props.name} />
        </div>
        <div className="blog-date">{props.date}</div>
      </div>
      <div className="blog-article">
        <img src={props.mainImage} alt={`${props.title} main rep`} />
        <div className="blog-part-one">{props.blogPartOne}</div>
        <img src={props.secImage} alt={`${props.title} secondary rep`} F />
        <div className="blog-part-two">{props.blogPartTwo}</div>
      </div>
    </div>
  );
}

export default BlogContainer;
