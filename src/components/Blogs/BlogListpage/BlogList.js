import React from 'react'
import blogsList from '@apis/blogsList'
import BaseLanguageComponent from '../../Templates/BaseLanguageComponent/BaseLanguageComponent'

function BlogList() {
  return (
    <div className='blog-list flex-col-center gap3'>
        <BaseLanguageComponent language='Html' list={blogsList} />
        <BaseLanguageComponent language='Css' list={blogsList} />
        <BaseLanguageComponent language='javascript' list={blogsList} />
        <BaseLanguageComponent language='React' list={blogsList} />
        <BaseLanguageComponent language='Vue' list={blogsList} />

    </div>
  )
}

export default BlogList
