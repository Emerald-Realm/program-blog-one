import React from 'react'

import BaseLanguagePage from '@templates/BaseLanguagePage/BaseLanguagePage'
import blogsList from '@apis/blogsList'

function JavascriptPage() {
  return (
    <div className='language-page javascript'>
        <BaseLanguagePage language='Javascript' list={blogsList} />
    </div>
  )
}

export default JavascriptPage
