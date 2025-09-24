import { motion, useAnimation } from "motion/react";
import { useState } from "react";
import {Link, Outlet} from 'react-router-dom'

import logo from '../assets/k-craft/header-logo.png'

const TopNav = () => {
  const controls = useAnimation();

  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <header className=" flex justify-between items-center min-h-16 max-w-dvw relative z-50">
          <img src={logo} alt="" className='max-w-[120px] relative z-50' />
          <motion.nav
            className="group text-black hover:bg-white hover:md:bg-transparent border border-neutral-700 bg-transparent py-1 px-2 md:px-2 rounded-full transition-colors duration-200 ease-in absolute left-1/2 -translate-x-1/2 z-50" 
            initial={{ y: -200 }}
            animate={{y: 0}}
            transition={{ duration: 0.6, delay : 1 }}
          >  
            <div className='hidden md:block text-black'>
              <ul className=" flex justify-between items-center relative z-20 lg:gap-5 *:px-4 *:py-2 *:rounded-full *:hover:bg-neutral-500 *:hover:text-white *:transition-colors *:duration-200 *:ease-in *:cursor-pointer">
                <li className="">
                  <Link to='/'>Home</Link>
                </li>
                <li className="">
                  <Link to='/about-us'>About Us</Link>
                </li>
                <li className="">
                  <Link to='/contact-us'>Contact</Link>
                </li>
                <li className="">
                  <Link to='/portfolio'>Projects</Link>
                </li>
              </ul>
            </div>

            <div className=' md:hidden flex-col items-center'>
              <div className=' relative flex justify-center items-center *:block *:absolute size-7 p-1' onClick={toggleOpen}>
                <span className={isOpen ? 'nav-button ' : 'nav-button shown'}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                  </svg>
                </span>
                <span  className={isOpen ? 'nav-button shown' : 'nav-button'}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                  </svg>
                </span>
              </div>
            </div>
          </motion.nav>
            <ul className={isOpen ? 'mini-nav' : 'mini-nav closed'}>
            <li className="">
                  <Link to='/'>Home</Link>
                </li>
                <li className="">
                  <Link to='/about-us'>About Us</Link>
                </li>
                <li className="">
                  <Link to='/contact-us'>Contact</Link>
                </li>
                <li className="">
                  <Link to='/portfolio'>Projects</Link>
                </li>
              </ul>
              <Link to="/contact-us">
          <button className=" flex justify-between items-center rounded-full outline bg-black cursor-pointer">
            <span className=" bg-white rounded-full px-2 py-1 md:px-3 md:py-2">Get Started</span>
            <span className="text-white p-1 rounded-full ">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
              </svg>
            </span>
          </button>
          </Link>
          
        </header>
        <Outlet />
    </>
  );
};

export default TopNav;