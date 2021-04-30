import React, { useContext } from 'react'
import { GlobalContext } from '../../App'

function Navbar() {
  const globalContext = useContext(GlobalContext)

  return (
    <div className={globalContext.globalState.menuStatus ? 'navbar' : 'hide'}>
      <ul className='nav-list'>
        <li className="navbar-item">Home</li>
        <li className="navbar-item">Blogs</li>
        <li className="navbar-item">About Us</li>
        <li className="navbar-item">Contact Us</li>
        <li className="navbar-item">Login</li>
      </ul>
    </div>
  )
}

export default Navbar