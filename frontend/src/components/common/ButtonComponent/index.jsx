import React from 'react'

function ButtonComponent({ButtonName, onClick}) {
  return (
    <button onClick={onClick} className='border w-30 h-10 rounded-lg bg-blue-500 border-blue-50 hover:bg-blue-600'>
          {ButtonName}
    </button>
  )
}

export default ButtonComponent
