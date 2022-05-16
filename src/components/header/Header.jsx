import React from 'react'
import './header.css'
import CTA from './CTA'
import GEPS from '../../assets/1.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className='container header__container'> 
      <h1>𝕲𝖊𝖕'𝖘 𝕭𝖎𝖌 𝕭𝖊𝖆𝖗'𝖘</h1>
      <h2 className="text-light">𝕶𝖊𝖓𝖓𝖊𝖑</h2>
      <HeaderSocials />
      <div className="me">
        <img src={GEPS} alt="me" />
      </div>

      <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header