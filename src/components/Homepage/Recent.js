import React from 'react'
import { BaseRecentOne }from '../Templates/BaseRecent/BaseRecent'
import recentList from '@apis/recentList'

function Recent() {
  return (
    <div className='home-recent flex-col gap2'>
      <p className='recent-title h4'>Recent</p>
      <div className='recent-card-list flex-col gap3'>
        {recentList.map((item, index) => (
          <BaseRecentOne
            title={item.title} key={item.id}
            tagOne={item.tagOne} tagTwo={item.tagTwo} tagThree={item.tagThree} />
        ))}
      </div>
    </div>
  )
}

export default Recent
