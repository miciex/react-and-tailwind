import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import NavElement from './subcomponents/NavElement'

import {
  faUser,
  faBriefcase,
  faHouse,
  faGears,
  faMessage,
} from '@fortawesome/free-solid-svg-icons'

import { LINKS } from '../consts'

const Navigation = () => {
  const icons = [faHouse, faMessage, faBriefcase, faUser, faGears]
  const [activeArr, setActiveArr] = useState([
    false,
    false,
    false,
    false,
    false,
  ])

  let content = activeArr.map((active, i, arr) => (
    <NavElement
      link={LINKS[i]}
      icon={icons[i]}
      num={i}
      active={active}
      setActive={setActiveArr}
      key={Math.random()}
    />
  ))
  return (
    <nav className='bg-white w-3/12 min-w-[280px] max-w-[700px] h-20 absolute bottom-0 rounded-2xl flex  justify-evenly text-center'>
      {content}
    </nav>
  )
}

export default Navigation
