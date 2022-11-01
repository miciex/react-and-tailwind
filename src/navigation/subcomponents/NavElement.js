import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const NavElement = ({ link, icon }) => {
  const location = useLocation()
  const active = location.pathname === link
  let classes =
    'h-full w-full flex justify-center items-center text-2xl hover:rounded-full hover:bg-slate-300'
  classes = active
    ? classes +
      ' transform translate-y-[-50%] bg-green-200 rounded-full border-solid border-[6px] border-slate-900'
    : classes

  return (
    <Link to={link} className='h-full aspect-square'>
      <span className={classes}>
        <FontAwesomeIcon icon={icon} />
      </span>
    </Link>
  )
}

export default NavElement
