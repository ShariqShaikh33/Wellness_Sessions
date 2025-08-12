import React from 'react'
import { SidebarButtonElements } from './utils/SidebarButtonElements';
import SidebarElement from './SidebarButton';

function Sidebar() {
  return (
    <div className='border-r-1 w-full h-full flex flex-col'>
      <div className='w-full h-18 border-b'>
        Logo
      </div>

      <div className='flex flex-col gap-2 pt-1'>
        {
          SidebarButtonElements.map((element)=>{
            return <SidebarElement key={element.label} {...element}/>
          })
        }
      </div>
    </div>
  )
}

export default Sidebar;
