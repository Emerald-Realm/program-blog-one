import React from 'react'

export function BaseTag(props) {
    return (
        <button className='base-tag h6-normal'>
            {props.tag}
        </button>
    )
}

export function BaseThreeTags(props) {

    const { tagOne, tagTwo, tagThree } = props

    return (
        <div className='base-three-tags'>
            <BaseTag tag={ tagOne } />
            <BaseTag tag={ tagTwo } />
            <BaseTag tag={ tagThree } />
        </div>
    )
}