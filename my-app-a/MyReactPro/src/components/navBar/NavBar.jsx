import React, { useState } from 'react'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'
import { Logo } from '../../assets'
import './navbar.css';

const NavBar = () => {
  const [toggleMenu, setToggleMenu] = useState(false)
  const Menum = () => (
    <>
      <p><a href='#home'>Home</a></p>
      <p><a href='#gpt'>GPT-3</a></p>
      <p><a href='#albums'>Albums</a></p>
      <p><a href='#vlog'>Vlog</a></p>
      <p><a href='#games'>Let's play!</a></p>
    </>
  )
  return (
    <div className=" gpt3__navbar">
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links-lego">
          <Logo className="logo" />
        </div>
        <div className="gpt3__navbar-links_container">
          <Menum />
        </div>
      </div>
      <div className='gpt3__navbar-sign'>
        <p>Sign in</p>
        <button type='button'>Sign up</button>
      </div>
      <div className='gpt3__navbar-menu'>
        {toggleMenu
          ? <RiCloseLine color='#fff' size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color='#fff' size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
          <div className="gpt3__navbar-menu_container scale-up-center">
            <div className="gpt3__navbar-menu_container-links">
              <Menum />
            </div>
            <div className="gpt3__navbar-menu_container-links-sign">
              <p>Sign in</p>
              <button type="button">Sign up</button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default NavBar