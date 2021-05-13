import React from 'react'
import { BaseButtonOne } from '../Templates/BaseButton/BaseButton'
import { NavLink } from "react-router-dom";

function Contact() {
    return (
        <div className='home-contact flex-col-center gap2'>
            <p className='contact-text h4-normal'>Looking for Us? We are Always Available</p>
            <NavLink to="/contact-us" exact>
                <BaseButtonOne buttonText='Contact Us' />
            </NavLink>

        </div>
    )
}

export default Contact
