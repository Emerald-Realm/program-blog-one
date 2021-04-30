import React from 'react'

import BaseListCard from '@templates/BaseBlogListCard/BaseListCard'
import blogsList from '@apis/blogsList'

function React() {
  return (
    <div className='blog-list-component flex-col-center gap3'>
      <p className='language-name h3'>React</p>
      {
        blogsList.map((item, index) => index ? (
          <BaseListCard key={item.id}
            alt={item.alt} title={item.title} name={item.name}
            tagOne={item.tagOne} tagTwo={item.tagTwo}
            image={item.image} tagThree={item.tagThree}
          />
        ) : ''
        )
      }
    </div>
  )
}

export default React
