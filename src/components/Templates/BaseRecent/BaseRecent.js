import React from 'react'
import { BaseButtonOne } from '../BaseButton/BaseButton'
import { BaseThreeTags } from '../BaseTags/BaseTags'

export function BaseRecentOne(props) {
  return (
    <div className='base-recent-one'>
      <p className='recent-title h4'>{props.title}</p>
      <BaseThreeTags
        tagOne={props.tagOne}
        tagTwo={props.tagTwo}
        tagThree={props.tagThree}
      />
    </div>
  )
}

export function BaseRecentTwo(props) {
  return (
    <div className='base-recent-two gap3 flex-col'>
      <div className='tags'>
        <BaseThreeTags tagOne={props.tagOne}
          tagTwo={props.tagTwo} tagThree={props.tagThree} />
      </div>
      <div className='blog-title h4'>{props.title}</div>
      <div className='blog-info'>
        <div className='blog-writer'>
          <img src={props.image} alt={props.alt} />
          <p className='blog-writer-name h6'>{props.name}</p>
        </div>
        <BaseButtonOne buttonText='Read More' />
      </div>
    </div>
  )
}