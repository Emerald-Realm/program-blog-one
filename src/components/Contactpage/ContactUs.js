import React from 'react'

import one from '@images/blogs/banner3.png'


function ContactUs() {
  return (
    <div className='contact-us flex-col-start gap4'>
      <p className='contact-us-title h3-bold dark'> Contact Us</p>
      <img src={one} alt='x-img' />

      <div className='contact-context flex-col gap5'>
        <p className='available dark h4-normal'>We are available at</p>
        <p className='number'><span>Phone Number : </span> 123456789</p>
        <p className='email'><span>Email : </span> jonahild@examle.com</p>
        <p className='number'><span>Location : </span> earth milky way</p>
      </div>

      <div className='showcase-images gap6'>
        <img src={one} alt='y-img' />
        <img src={one} alt='y-img' />
        <img src={one} alt='y-img' />
      </div>

      <div className='social'>
        <p className='link-intro dark h4-thin'>You can follow us at</p>
        <p className='link'>Instagram</p>
        <p className='link'>Facebook</p>
        <p className='link'>Twitter</p>
        <p className='link'>Youtube</p>
      </div>

    </div>
  )
}

export default ContactUs
