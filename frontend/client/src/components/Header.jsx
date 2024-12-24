import React from 'react'
import { Outlet } from 'react-router-dom'

const Header = () => {
  return (
    <div className='w-full bg-slate-500'>
      Header
      <Outlet></Outlet>
    </div>

  )
}

export default Header
