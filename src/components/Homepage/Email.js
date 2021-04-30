import React from 'react'
import { BaseButtonTwo } from '../Templates/BaseButton/BaseButton'

function Email() {
    return (
        <div className='home-email flex-col-center gap6'>
            <p className='subscribe h4'>Subscribe to My NewsLetter</p>
            <input type='email' placeholder='johnDoe@example.com'/>
            <BaseButtonTwo buttonText='Subscribe Now' />
        </div>
    )
}

export default Email
