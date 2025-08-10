import React from 'react'
import { SidebarButtonElements } from './utils/SidebarButtonElements'
import { NavLink } from 'react-router-dom';

function SidebarElement({link, label, logo}) {
  return (
    <NavLink to={link}>
    <div className='flex pl-2 h-13 w-full justify-left items-center gap-2 bg-gray-50 hover:bg-blue-50 rounded-l'>
        <span>{logo}</span>
        {label}
    </div>
    </NavLink>
  )
}

export default SidebarElement;
