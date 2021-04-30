import React from 'react'
import popularList from '../../assets/apis/popularList'
import BasePost from '../Templates/BasePost/BasePost'

function HomePopular() {
  return (
    <div className='home-popular flex-col-center'>
      <div className='popular-post-slide gap5'>
        {popularList.map((item, index) => (
          <BasePost key={item.id}
          image={item.image} alt={item.alt}
          title={item.title} tagOne={item.tagOne}
          tagTwo={item.tagTwo} tagThree={item.tagThree}
          text={item.text} />
          )
        )}
      </div>
    </div>
  )
}

export default HomePopular
