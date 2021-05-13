import React from 'react'
import { BaseRecentOne }from '../Templates/BaseRecent/BaseRecent'
import recentList from '@apis/recentList'

function Recent() {
  return (
    <div className='home-recent flex-col gap4'>
      <p className='recent-title h4-bold'>Recent</p>
      <div className='recent-card-list gap5'>
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
