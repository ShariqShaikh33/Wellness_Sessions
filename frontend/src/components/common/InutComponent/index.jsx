import React from 'react'

function InputComponent({id, label, placeholder, onChange}) {
  return (
    <div className='flex flex-col pl-4 pr-4 gap-1'>
          <label className='text-xl pl-2' htmlFor={id}>{label}</label>
          <input onChange={onChange} className='border w-full h-10 p-2 rounded-lg' id={id} type={id} placeholder={placeholder}></input>
    </div>
  )
}

export default InputComponent
