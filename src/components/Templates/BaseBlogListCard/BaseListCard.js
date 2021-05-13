import React from 'react'
import { BaseThreeTags } from '../BaseTags/BaseTags'

function BaseListCard(props) {
  return (
    <div className='base-list-card gap4'>
      <img src={props.image} alt={props.alt} />
      <div className='list-card-context'>
        <p className='list-card-title h6-bold'>{props.title}</p>
        <p className='list-card-name h6-thin'>{props.name}</p>
        <BaseThreeTags tagOne={props.tagOne}
          tagTwo={props.tagTwo} tagThree={props.tagThree} />
      </div>
    </div>
  )
}

export default BaseListCard
