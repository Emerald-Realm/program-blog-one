import React from 'react'
import { NavLink } from "react-router-dom";

import BaseListCard from '@templates/BaseBlogListCard/BaseListCard'
import { BaseButtonThree } from '@templates/BaseButton/BaseButton'

function BaseLanguagePage(props) {

  let { language, list } = props

  return (
    <>
      <p className='language-name h3'>{language}</p>
    <div className='flex-col gap3' id={language} >
      <div className='blog-list-component gap3'>
        {
          list.map((item, index) => index ? (
            <BaseListCard key={item.id}
              alt={item.alt} title={item.title} name={item.name}
              tagOne={item.tagOne} tagTwo={item.tagTwo}
              image={item.image} tagThree={item.tagThree}
            />
          ) : ''
          )
        }
      </div>
   <NavLink to={`/${language}Page`} exact >
      <BaseButtonThree buttonText='See all' />
    </NavLink>
    </div>
    </>
  )
}

export default BaseLanguagePage
