import React from 'react'

import { BaseButtonOne } from '../Templates/BaseButton/BaseButton'
import { BaseThreeTags } from '../Templates/BaseTags/BaseTags'

function ShowCase() {
  return (

    <div className='home-showcase'>
      <div className='showcase-card gap3'>
        <div className='tags'>
          <BaseThreeTags tagOne='tag one' tagTwo='tag two' tagThree='tag three' />
        </div>
        <div className='blog-title h4-normal'>Why Being Naive Can Make Your Fortune</div>
        <div className='blog-info'>
          <div className='blog-writer'>
            <p>image</p>
            <p className='blog-writer-name h6-light'>John Doe</p>
          </div>
            <BaseButtonOne buttonText='Read More' />
        </div>
      </div>
    </div>
  )
}

export default ShowCase
