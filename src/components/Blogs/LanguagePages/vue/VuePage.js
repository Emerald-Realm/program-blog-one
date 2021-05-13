import React from 'react'

import BaseLanguagePage from '@templates/BaseLanguagePage/BaseLanguagePage'
import blogsList from '@apis/blogsList'

function VuePage() {
  return (
    <div className='language-page vue'>
    <BaseLanguagePage language='Vue' list={blogsList} />
    </div>
  )

}

export default VuePage
