import React from 'react'
import { Link } from 'react-router-dom';
import { FaCheckCircle, FaChessKnight, FaCompass,FaHatCowboy } from 'react-icons/fa'

function Navbar() {
  return (
    <div className='fixed top-0 left-0 h-screen w-16 m-0 flex flex-col bg-gray text-white shadow-md'>
      <NavBarIcon icon={<FaCheckCircle size='28' />} />
      <NavBarIcon icon={<FaCompass size='28' />} />
      <NavBarIcon icon={<FaChessKnight size='28' />} />
      <NavBarIcon icon={<FaHatCowboy size='28' />} />
    </div>
  )
}

function NavBarIcon ({icon, text='hello'}) {
  <div className='sidebar-icon group'>
    {icon}
  </div>
}

function Divider(){
  <hr className='sidebar-hr' />
}
export default Navbar