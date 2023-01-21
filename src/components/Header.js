import React, { useContext, useState, useEffect } from 'react'
import { SidebarContext } from '../contexts/SidebarContext';
import { CartContext } from '../contexts/CartContext';
import { BsBag } from 'react-icons/bs';
import Logo from '../img/logo3.svg';
import { Link } from 'react-router-dom';


const Header = () => {
    const [isActive, setIsActive] = useState(false);
    const {isOpen, setIsOpen} = useContext(SidebarContext);
    const {itemAmount} = useContext(CartContext);

    useEffect(()=> {
      window.addEventListener('scroll', ()=> {
        window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
      })
    })
  return (
    <header className={`${isActive ? 'bg-indigo-400':'bg-indigo-200'} flex justify-between items-center px-5 py-3 fixed w-full z-10 transition-all duration-500`}>
        <Link className='flex justify-between items-center' to={'/'}>
          <div className=''>
            <img className='w-[40px]' src={Logo} alt="" />
          </div>
          <div className='hidden ml-3 uppercase font-bold md:block'>
            Tokoku
          </div>
        </Link>
        <div onClick={() => setIsOpen(!isOpen) } className="cursor-pointer flex relative hover:text-indigo-900 hover:scale-110 transition-all duration-300">
            <BsBag className='text-2xl'/>
            <div className='bg-red-500 absolute -right-2 -bottom-2 text-[12px] w-[18px] h-[18px] text-white rounded-full flex justify-center items-center'>
              {itemAmount}
            </div>
        </div>
    </header>
  )
}

export default Header