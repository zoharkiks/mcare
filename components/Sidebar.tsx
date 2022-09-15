import React from 'react'
import { Icon } from '@iconify/react';


const Sidebar = () => {
  return (
    <div className='flex flex-col font-poppins bg-white fixed h-screen px-6 py-4 border-r-2  '>
      <h1 className=' text-orange-600 font-bold text-3xl'>M.<span className='text-black'>Care</span></h1>
      {/* Links */}
      <div className="flex flex-col text-gray-400 font-medium">
        <div className="flex items-center space-x-3">
        <Icon icon="ep:menu" />
<h2 className=''>Dashboard</h2>
        </div>
      </div>
    </div>
  )
}

export default Sidebar