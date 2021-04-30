import { React, useState, useEffect } from 'react'
import testimonyList from '@apis/testimonyList'
import BaseTestimony from '../Templates/BaseTestimony/BaseTestimony'
function Testimony() {

  const [index, setIndex] = useState(0)

  useEffect(() => {
    const next = (index + 1) % testimonyList.length
    const id = setTimeout(() => setIndex(next), 10000)
    return () => clearTimeout(id)
  }, [index])

  let focus = testimonyList[index]

  return (
    <div className='home-testimony flex-col-center gap3'>
      <BaseTestimony image={focus.image} alt={focus.alt}
        text={focus.text} person={focus.name} />
      <div className='testimony-control'>
      </div>
    </div>
  )
}

export default Testimony
