import React from 'react'
import { BaseButtonOne } from '../Templates/BaseButton/BaseButton'
import { NavLink } from 'react-router-dom'

function Aim() {
    return (
        <div className='home-aim flex-col-center gap3'>
            <p className='aim-text h4-normal'>Faster Code Easy Debugging</p>
            <NavLink to="/blog-list" exact>
            <BaseButtonOne buttonText='Read More' />
          </NavLink>
        </div>
    )
}

export default Aim
