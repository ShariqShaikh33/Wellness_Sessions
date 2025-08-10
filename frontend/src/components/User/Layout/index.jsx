import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../Header'
import Sidebar from '../Sidebar'

function UserLayout() {
  return (
    <div className='w-screen h-screen flex'>
      <aside className='w-52'>
        <Sidebar/>
      </aside>
      <main className='flex flex-col w-full'>
        <Header/>
        <div className='w-full h-full border flex justify-center items-center'>
            <Outlet/>
        </div>
      </main>
    </div>
  )
}

export default UserLayout
