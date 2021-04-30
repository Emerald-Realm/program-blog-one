import React from 'react'

import BaseListCard from '@templates/BaseBlogListCard/BaseListCard'
import blogsList from '@apis/blogsList'

function Html() {
  return (
    // <div className='html flex-col-end gap3' >
      <div className='blog-list-component flex-col-center gap3'>
        <p className='language-name h3'>HTML</p>
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
        // <BaseButtonThree buttonText = 'See all' />
    // </div>
  )
}

export default Html
