import React from 'react'
import { BaseButtonOne } from '../Templates/BaseButton/BaseButton'

function Email() {
    return (
        <div className='home-email flex-col-center gap6'>
            <p className='subscribe h4'>Subscribe to My NewsLetter</p>
            <input type='email' placeholder='johnDoe@example.com'/>
            <BaseButtonOne buttonText='Subscribe Now' />
        </div>
    )
}

export default Email
