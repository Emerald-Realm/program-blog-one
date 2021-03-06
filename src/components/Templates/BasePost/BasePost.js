import React from 'react'

import { BaseButtonThree } from '../BaseButton/BaseButton'
import { BaseThreeTags } from '../BaseTags/BaseTags'

function BasePost(props) {
    return (
        <div className='base-post gap8'>
            <img src={props.image} alt={props.alt} />
            <p className='post-title h5-normal'>{props.title}</p>
            <BaseThreeTags
                tagOne={props.tagOne}
                tagTwo={props.tagTwo}
                tagThree={props.tagThree} />
            <p className='post-text'>{props.text}</p>
            <BaseButtonThree buttonText='Read More' />
        </div>
    )
}

export default BasePost
