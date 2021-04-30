import React from 'react'

import BaseListCard from '@templates/BaseBlogListCard/BaseListCard'
import blogsList from '@apis/blogsList'
import { BaseButtonThree } from '@templates/BaseButton/BaseButton'

function CssComponent() {
  return (
    <div className='css flex-col-end gap3' >
      <div className='blog-list-component flex-col-center gap3'>
        <p className='language-name h3'>CSS</p>
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

export default CssComponent
