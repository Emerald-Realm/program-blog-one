import React from 'react'

import BaseBlog from '@templates/BaseBlog/BaseBlog'
// import BlogOne from '@blogs/BlogOne'
import BlogOne from '../../../assets/blogs/BlogOne'
// import BlogOne from '@blogs/BlogOne'

function Blog() {
  return (
    <div className='blog'>
      <BaseBlog
        name={BlogOne.name}
        bloggerImage={BlogOne.bloggerImage}
        tagOne={BlogOne.tagOne}
        tagTwo={BlogOne.tagTwo}
        tagThree={BlogOne.tagThree}
        title={BlogOne.title}
        date={BlogOne.date}
        mainImage={BlogOne.mainImage}
        secImage={BlogOne.secImage}
        partOne={BlogOne.partOne}
        partTwo={BlogOne.partTwo}
      />
    </div>
  )
}

export default Blog
