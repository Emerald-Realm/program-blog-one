import React from 'react'

import one from '@images/wallpapers/wallpaper5.jpg'

function ContactUs() {
  return (
    <div className='contact-us flex-col-start'>
      <img src={one} alt='x-img' />

      <div className='contact-context'>
        <p className='available'>We are available at</p>
        <p className='number'><span>Phone Number : </span> 123456789</p>
        <p className='email'><span>Email : </span> jonahild@examle.com</p>
        <p className='number'><span>Location : </span> earth milky way</p>
      </div>

      <div className='showcase-images'>
        <img src='#' alt='y-img' />
        <img src='#' alt='y-img' />
        <img src='#' alt='y-img' />
      </div>

      <div className='social'>
        <p className='link-intro'>You can follow us at</p>
        <p className='link'>Instagram</p>
        <p className='link'>Facebook</p>
        <p className='link'>Twitter</p>
        <p className='link'>Youtube</p>
      </div>

    </div>
  )
}

export default ContactUs
