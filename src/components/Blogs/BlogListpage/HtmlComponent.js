import React from 'react'

import blogsList from '@apis/blogsList'
import BaseLanguageComponent from '../../Templates/BaseLanguageComponent/BaseLanguageComponent'

function HtmlComponent() {
  return (
      <>
        <BaseLanguageComponent language='Html' list={blogsList} />
      </>
  )
}

export default HtmlComponent
