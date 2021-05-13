import React from 'react'

import BaseLanguagePage from '@templates/BaseLanguagePage/BaseLanguagePage'
import blogsList from '@apis/blogsList'

function HtmlPage() {
  return (

    <div className='language-page html'>
        <BaseLanguagePage language='Html' list={blogsList} />
    </div>

  )
}

export default HtmlPage
