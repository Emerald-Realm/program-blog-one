import React from 'react'
import BaseListCard from '@templates/BaseBlogListCard/BaseListCard'

function RelatedBlogs(props) {
  return (
    <div className='related-blogs'>
      <p className='related-title'>Related</p>
      <div className='collection'>
        {
          props.list.map((item, index) => index ? (
            <BaseListCard key={item.id}
              alt={item.alt} title={item.title} name={item.name}
              tagOne={item.tagOne} tagTwo={item.tagTwo}
              image={item.image} tagThree={item.tagThree}
            />
          ) : ''
          )
        }
      </div>
    </div>
  )
}

export default RelatedBlogs
