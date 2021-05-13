import React from 'react'

import BaseLanguagePage from '@templates/BaseLanguagePage/BaseLanguagePage'
import blogsList from '@apis/blogsList'

function ReactPage() {
  return (
    <div className='language-page react'>
     <BaseLanguagePage language='React' list={blogsList} />
    </div>
  )
}

export default ReactPage
