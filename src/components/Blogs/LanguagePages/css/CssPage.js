import React from 'react'

import BaseLanguagePage from '@templates/BaseLanguagePage/BaseLanguagePage'
import blogsList from '@apis/blogsList'

function CssPage() {
  return (
    <div className='language-page css'>
       <BaseLanguagePage language='Css' list={blogsList} />
    </div>
  )
}

export default CssPage
