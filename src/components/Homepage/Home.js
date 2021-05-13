import React from 'react'

import Intro from './Intro'
import ShowCase from './ShowCase'
import HomeLanguage from './HomeLanguage'
import Philosophy from './Philosophy'
import HomePopular from './HomePopular'
import Aim from './Aim'
import Recent from './Recent'
import Contact from './ContactComponent'
import Testimony from './Testimony'
import Email from './Email'

function Home() {
    return (
        <div className='home-page gap1'>
            <Intro />
            <ShowCase />            
            <HomeLanguage />
            <Philosophy />
            <HomePopular />
            <Aim />
            <Recent />
            <Contact />
            <Testimony />
            <Email />
        </div>
    )
}

export default Home
