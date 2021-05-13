import React from 'react'

import BaseListCard from '@templates/BaseBlogListCard/BaseListCard'
import blogsList from '@apis/blogsList'
import { BaseButtonThree } from '@templates/BaseButton/BaseButton'

function JsComponent() {
  return (
    <div className='js flex-col gap3' >
      <p className='language-name h3'>JAVASCRIPT</p>
    <div className='blog-list-component gap3'>
      {
        blogsList.map((item, index) => index < 1 ? (
          <BaseListCard key={item.id}
            alt={item.alt} title={item.title} name={item.name}
            tagOne={item.tagOne} tagTwo={item.tagTwo}
            image={item.image} tagThree={item.tagThree}
          />
        ) : ''
        )
      }
    </div>
      <BaseButtonThree buttonText = 'See all' />
  </div>
  )
}

export default JsComponent
