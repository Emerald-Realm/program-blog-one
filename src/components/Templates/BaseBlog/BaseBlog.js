import React from 'react'

import BlogActions from '@templates/Actions/BlogActions'
import BlogContainer from './BlogContainer'
import RelatedBlogs from './RelatedBlogs'
import relatedList from '@apis/relatedList'

function BaseBlog(props) {

  const { name, bloggerImage, tagOne, tagTwo, tagThree, title, date, mainImage, secImage, partOne, partTwo} = props

  return (
    <div className='base-blog flex-col-start gap3'>
      <BlogContainer name={name}
      bloggerImage={bloggerImage}
      tagOne = {tagOne}
      tagTwo = {tagTwo}
      tagThree = {tagThree}
      title = {title}
      date= {date}
      mainImage = {mainImage}
      secImage = {secImage}
      blogPartOne = {partOne}
      blogPartTwo = {partTwo}
      />
      <BlogActions />
      <RelatedBlogs list={relatedList}/>
      <div className='related-blogs'></div>
    </div>
  )
}

export default BaseBlog
