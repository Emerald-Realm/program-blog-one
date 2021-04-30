import React from 'react'

function BaseTestimony(props) {
    return (
        <div className='base-testimony flex-col-center gap5'>
            <img src={props.image} alt={props.alt}/>
            <p className='testimony-text'>{props.text}</p>
            <p className='testimony-accth6'>{props.person}</p>
        </div>
    )
}

export default BaseTestimony
