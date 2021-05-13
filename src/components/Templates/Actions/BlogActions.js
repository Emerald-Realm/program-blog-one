import React from 'react'

function BlogActions() {

  return (
    <div className='blog-actions'>
      <div className='blog-clicks'>
        <button className='like'>Like</button>
        <button className='bookmark'>Bookmark</button>
        <button className='recommend'>recommend</button>
      </div>
      <div className='blog-comments'>
        <div className='blogs-comments-display'></div>
        <div className='blogs-comment-form'></div>
      </div>
    </div>
  )
}

export default BlogActions
