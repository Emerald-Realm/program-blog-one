import React from 'react'
import CssComponent from './CssComponent'

import HtmlComponent from './HtmlComponent'
import ReactComponent from './ReactComponent'
import VueComponent from './VueComponent'
import JsComponent from './JsComponent'


function BlogList() {
  return (
    <div className='blog-list flex-col-center gap3'>
      <HtmlComponent />
      <CssComponent />
      <JsComponent />
      <ReactComponent />
      <VueComponent />
    </div>
  )
}

export default BlogList
