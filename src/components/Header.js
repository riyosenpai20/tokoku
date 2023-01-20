import React, { useContext } from 'react'
import { SidebarContext } from '../contexts/SidebarContext';
import { BsBag } from 'react-icons/bs';

const Header = () => {
    const {isOpen, setIsOpen} = useContext(SidebarContext);
  return (
    <div className='bg-indigo-200 flex justify-between items-center px-5 py-3'>
        <div>Header</div>
        <div onClick={() => setIsOpen(!isOpen) } className="cursor-pointer flex relative hover:text-indigo-900 hover:scale-110 transition-all duration-300">
            <BsBag className='text-2xl'/>
        </div>
    </div>
  )
}

export default Header