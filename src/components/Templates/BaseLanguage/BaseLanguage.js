import React from 'react'

export function BaseLanguageCard(props) {
    return (
        <div className='base-language-card mobile flex-col-center gap-4'>
            <img src={props.image} alt={props.alt} />
            <p className='language-title h4'>{props.language}</p>
            <p className='language-intro'>{props.intro}</p>
        </div>
    )
}

