import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'
import {BiMessageSquareDetail} from 'react-icons/bi'
import {useState} from 'react'
import {FaDog} from 'react-icons/fa'
import { Link } from 'react-router-dom'

function Nav() {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <Link to="/"><AiOutlineHome /></Link>
      <Link to="/experience"><BiBook /></Link>
      <Link to="/about"><AiOutlineUser /></Link>
      <Link to="/portfolio"><FaDog /></Link>
      <Link to="/contact"><BiMessageSquareDetail /></Link>
    </nav>
  )
}

export default Nav