import { motion, useAnimation } from "motion/react";
import { useState } from "react";

const TopNav = () => {
  const controls = useAnimation();

  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  }

  return (
    <motion.nav
      className="group text-black hover:bg-white hover:md:bg-transparent border border-white bg-transparent py-1 px-2 md:px-2 rounded-full transition-colors duration-200 ease-in"
      initial={{ y: -200 }}
      animate={{y: 0}}
      transition={{ duration: 0.6, delay : 1 }}
    >  
      <div className='hidden md:block text-white'>
        <ul className=" flex justify-between items-center relative z-20 gap-5 *:px-4 *:py-2 *:rounded-full *:hover:bg-neutral-100 *:hover:text-black *:transition-colors *:duration-200 *:ease-in *:cursor-pointer">
          <li className="">Projects</li>
          <li className="">About Us</li>
          <li className="">Blog</li>
          <li className="">Contact</li>
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

        <ul className={isOpen ? 'mini-nav' : 'mini-nav closed'}>
          <li className="">Projects</li>
          <li className="">About Us</li>
          <li className="">Blog</li>
          <li className="">Contact</li>
        </ul>
      </div>
    </motion.nav>
  );
};

export default TopNav;