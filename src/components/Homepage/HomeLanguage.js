import React from 'react'

import { BaseLanguageCard } from '../Templates/BaseLanguage/BaseLanguage'

import html from '@images/logos/html5.png'
import css from '@images/logos/css3.png'
import js from '@images/logos/javascript.png'
import react from '@images/logos/react.png'
import vue from '@images/logos/vue.png'

function HomeLanguage() {
  return (
    <div className='home-language flex-col gap2'>
      <ul className='language-navbar'>
        <li className='language-link'>html</li>
        <li className='language-link'>html</li>
        <li className='language-link'>html</li>
        <li className='language-link'>html</li>
        <li className='language-link'>html</li>
        <li className='language-link'>html</li>
      </ul>
      <div className='languages-card flex-col-center gap3'>
        <BaseLanguageCard language='HTML 5' image={html} alt='html 5 logo' />
        <BaseLanguageCard language='CSS 3' image={css} alt='css 3 logo' />
        <BaseLanguageCard language='JAVASCRIPT ' image={js} alt='js logo' />
        <BaseLanguageCard language='REACT' image={react} alt='react js logo' />
        <BaseLanguageCard language='VUE' image={vue} alt='vue js logo' />
      </div>
    </div>
  )
}

export default HomeLanguage
