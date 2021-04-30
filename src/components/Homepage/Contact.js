import React from 'react'
import { BaseButtonOne } from '../Templates/BaseButton/BaseButton'

function Contact() {
    return (
        <div className='home-contact flex-col-center gap2'>
            <p className='contact-text h3'>Looking for Us? We are Always Available</p>
            <BaseButtonOne buttonText='Contact Us' />
        </div>
    )
}

export default Contact
