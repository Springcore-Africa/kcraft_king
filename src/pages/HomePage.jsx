import React from 'react'

import Img1 from '../assets/pexels-expect-best-79873-323772.jpg';
import Img2 from '../assets/pexels-expect-best-79873-323775.jpg';
import Img3 from '../assets/pexels-expect-best-79873-323776.jpg';

function HomePage() {
  return (
    <main className='overflow-x-hidden '>
      <section className=" h-dvh w-dvw max-h-dvh max-w-dvw bg-[url('./assets/pexels-pixabay-258154.jpg')] bg-center bg-cover text-white px-5 overflow-hidden relative">
        <header className=" flex justify-between items-center min-h-14">
          <h2 className=" font-bold uppercase text-lg">Dnoin.inc</h2>
          <nav className=" text-black">
            <div className='hidden md:block'>
              <ul className=" flex justify-between items-center relative z-20 gap-5">
                <li className="">Projects</li>
                <li className="">About Us</li>
                <li className="">Blog</li>
                <li className="">Contact</li>
              </ul>
            </div>
            {/* <div className=' md:hidden flex-col items-center bg-white'>
              <ul className=' flex flex-col items-center'>
                <li className="">Projects</li>
                <li className="">About Us</li>
                <li className="">Blog</li>
                <li className="">Contact</li>
              </ul>
              <div className=' relative *:block *:absolute'>
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                  </svg>
                </span>
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                  </svg>
                </span>
              </div>
            </div> */}
          </nav>
          <button className=" flex justify-between items-center rounded-full outline bg-white">
            <span className=" bg-[url(./assets/pexels-pixabay-258154.jpg)] bg-position-[left_90%_top] rounded-full px-2 py-1 md:px-3 md:py-2">Get Started</span>
            <span className="text-black p-1 rounded-full ">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
              </svg>
            </span>
          </button>
        </header>

        <div className=" px-5 flex flex-col items-start gap-16 justify-end h-10/12 pb-5">
          <p className=" hidden w-1/3 text-lg lg:block">
            According to vitruvius, the architect should strive to fulfill each of these three attributed as well as possible
          </p>
          <div className="flex justify-between items-end w-full">
            <div className="md:w-2/3">
              <h1 className=" text-7xl">Building</h1>
              <div className="sm:flex sm:gap-3 sm:items-center">
                <span className=" italic font-serif text-6xl pb-4 block md:inline">Beyond</span>
                <button className="flex justify-between items-center rounded-full outline bg-white text-base">
                  <span className=" bg-[url(./assets/pexels-pixabay-258154.jpg)] bg-position-[left_bottom] rounded-full px-2 py-1 text-sm font-semibold md:px-3 md:py-2">Contact Us</span>
                  <span className="text-black px-1 py-1">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                    </svg>
                  </span>
                </button>
              </div>
            </div>
            <div className="hidden w-1/3 p-3 md:block">
              <h3 className=" font-semibold text-xl">Architecture can mean</h3>
              <p className=" text-md">A general term to describe buildings and other physical structures.</p>
            </div>
          </div>
        </div>
        
      </section>

      <section className='py-5 px-10'>
        <div className="py-5 box-border md:flex md:items-start">
          <ul className=" list-disc pl-5 pb-5 md:w-1/3">
            <li className=" font-bold text-xl">
              About
            </li>
          </ul>
          <div className=" md:w-2/3">
            <p className="font-semibold text-xl">Lorem ipsum, dolor sit amet consectetur adipisicing elit. At eveniet quae mollitia, eligendi porro sapiente dicta voluptas recusandae, explicabo in tempora provident iste ut esse temporibus libero maiores consectetur doloribus.</p>
          </div>
        </div>

        <hr className='border-zinc-700'/>

        <div>
          <div className=" flex justify-between gap-10 items-start py-5">
            <div className="max-w-1/3">
              <h1 className=" leading-[30px] text-5xl"><span>Recent</span><br/><span className='italic font-serif text-4xl'>Projects</span></h1>
            </div>
            <div className=" hidden max-w-1/3 lg:block">
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis possimus odio tenetur vero a officiis repudiandae ex, alias ut provident at quis asperiores rerum dignissimos sit dolorem atque ad enim.</p>
            </div>
            <div className="">
              <button className="flex justify-between items-center rounded-full outline bg-black text-base">
                <span className="bg-white rounded-full px-2 py-1 text-sm font-semibold md:px-3 md:py-2">View All</span>
                <span className="text-white p-1">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                  </svg>
                </span>
              </button>
            </div>
          </div>
        </div>

          <div className="flex flex-col md:flex-row md:justify-evenly items-center sm:*:w-3/4 xl:px-7">
            <div className="px-3 pb-5 pt-3 md:w-1/3">
              <div className='
               relative overflow-hidden aspect-[4/5] mini-loop pb-3
               before:absolute before:w-1/2 before:left-1/2 before:h-6 before:top-0 before:-translate-1/2 before:content-[""]
               after:absolute after:w-1/2 after:left-1/2 after:h-6  after:-translate-1/2 after:content-[""]
              '>
                <img src={Img2} alt="" className=' w-full h-full object-cover' />
              </div>
              <ul className=' list-disc pl-5'>
                <li className='text-zinc-700'>Location, Country</li>
              </ul>
              <h4 className='text-xl font-semibold'>Building Name</h4>
            </div>
            <div className="px-3 pb-5 pt-3 md:w-1/3">
              <div className='
               relative overflow-hidden aspect-[3/4] mini-loop pb-3
               before:absolute before:w-1/2 before:left-1/2 before:h-6 before:top-0 before:-translate-1/2 before:content-[""]
               after:absolute after:w-1/2 after:left-1/2 after:h-6  after:-translate-1/2 after:content-[""]
              '>
                <img src={Img1} alt="" className=' w-full h-full object-cover' />
              </div>
              <ul className=' list-disc pl-5'>
                <li className='text-zinc-700'>Location, Country</li>
              </ul>
              <h4 className='text-xl font-semibold'>Building Name</h4>
            </div>
            <div className="px-3 pb-5 pt-3 md:w-1/3">
              <div className='
               relative overflow-hidden aspect-[3/4] mini-loop pb-3
               before:absolute before:w-1/2 before:left-1/2 before:h-6 before:top-0 before:-translate-1/2 before:content-[""]
               after:absolute after:w-1/2 after:left-1/2 after:h-6  after:-translate-1/2 after:content-[""]
              '>
                <img src={Img3} alt="" className=' w-full h-full object-cover' />
              </div>
              <ul className=' list-disc pl-5'>
                <li className='text-zinc-700'>Location, Country</li>
              </ul>
              <h4 className='text-xl font-semibold'>Building Name</h4>
          </div>
        </div>
      </section>

      <section className='py-5 px-10'>
        <div className="py-5 box-border md:flex">
          <ul className=" list-disc pl-5 pb-5 md:w-1/3">
            <li className=" font-bold text-xl">
              Our Architects
            </li>
          </ul>
          <div className=' md:w-2/3'>
            <table className='w-full'>
              <tbody>
                <tr className='border-t border-t-zinc-400 group *:p-3 hover:border-t-black *:text-zinc-500 *:group-hover:text-black *:transition-all *:duration-[5s] *:ease-in'>
                  <td>
                    <div className='w-14 aspect-square bg-red-200 md:invisible md:group-hover:visible'>
                      <img src="" alt="" />
                    </div>
                  </td>
                  <td>
                    <p className='font-semibold text-md'>Full Name</p>
                  </td>
                  <td>
                    <ul className='list-disc text-md'>
                      <li>Location, Country</li>
                    </ul>
                  </td>
                  <td>
                    <p className='text-xs'>View Profile</p>
                  </td>
                </tr>
                <tr className='border-t border-t-zinc-400 group *:p-3 hover:border-t-black *:text-zinc-500 *:group-hover:text-black'>
                  <td>
                    <div className='w-14 aspect-square bg-red-200 md:invisible md:group-hover:visible'>
                      <img src="" alt="" />
                    </div>
                  </td>
                  <td>
                    <p className='font-semibold text-md'>Full Name</p>
                  </td>
                  <td>
                    <ul className='list-disc text-md'>
                      <li>Location, Country</li>
                    </ul>
                  </td>
                  <td>
                    <p className='text-xs'>View Profile</p>
                  </td>
                </tr>
                <tr className='border-t border-t-zinc-400 group *:p-3 hover:border-t-black *:text-zinc-500 *:group-hover:text-black'>
                  <td>
                    <div className='w-14 aspect-square bg-red-200 md:invisible md:group-hover:visible'>
                      <img src="" alt="" />
                    </div>
                  </td>
                  <td>
                    <p className='font-semibold text-md'>Full Name</p>
                  </td>
                  <td>
                    <ul className='list-disc text-md'>
                      <li>Location, Country</li>
                    </ul>
                  </td>
                  <td>
                    <p className='text-xs'>View Profile</p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className=" h-dvh max-h-dvh max-w-dvw bg-[url('./assets/pexels-binyaminmellish-1396132.jpg')] bg-center bg-cover text-white px-5 overflow-hidden relative box-border">
        <div className=' h-full w-full flex flex-col justify-end py-7'>
          <div className='md:h-0.5 md:w-full md:bg-white'></div>
          <div className='md:flex md:justify-between md:items-center'>
            <h2 className='text-5xl pb-3'>
              <span>Project</span>
              <br />
              <span className='font-serif italic text-4xl'>Categories</span>
            </h2>
            <ul className=' list-disc pl-5 pb-5'>
              <li>Interior Design</li>
              <li>Commercial Architect</li>
              <li>Landscape Architect</li>
              <li>Civic Project</li>
            </ul>
            <button className=" flex justify-between items-center rounded-full outline bg-white">
              <span className=" bg-[url(./assets/pexels-binyaminmellish-1396132.jpg)] bg-position-[left_40%_top_rem] rounded-full px-2 py-1 md:px-3 md:py-2 ">Contact us</span>
              <span className="text-black px-1 rounded-full ">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                </svg>
              </span>
            </button>
          </div>
        </div>
      </section>

      <section className='py-5 px-10'>
        <div className="py-5 box-border">
          <ul className=" list-disc pl-5 pb-5">
            <li className=" font-bold text-xl">
              Recent case studies
            </li>
          </ul>    
          <div className=''>
            <div className='border-t border-t-zinc-600 px-3 py-2 md:flex md:flex-row-reverse md:py-4 md:justify-between'>
              <div className=' w-full aspect-video overflow-hidden md:w-1/2 lg:w-1/3'>
                <img src={Img3} alt="" className='w-full h-full object-cover' />
              </div>
              <div className='md:w-1/2'>
                <h4 className='font-semibold text-lg pb-2 md:text-xl'>Building Fullname</h4>
                <p className=' pb-2 text-md md:text-base'>
                  Some minor text about the building that does not take much space
                </p>
                <button className="flex justify-between items-center rounded-full outline bg-black text-base mb-2">
                  <span className="bg-white rounded-full px-2 py-1 text-sm font-semibold md:px-3 md:py-2"> View More</span>
                  <span className="text-white p-1">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                    </svg>
                  </span>
                </button>
              </div>
            </div>
            <div className='border-t border-t-zinc-600 px-3 py-2 md:flex md:flex-row-reverse md:py-4 md:justify-between'>
              <div className=' w-full aspect-video overflow-hidden md:w-1/2 lg:w-1/3'>
                <img src={Img3} alt="" className='w-full h-full object-cover' />
              </div>
              <div className='md:w-1/2'>
                <h4 className='font-semibold text-lg pb-2 md:text-xl'>Building Fullname</h4>
                <p className=' pb-2 text-md md:text-base'>
                  Some minor text about the building that does not take much space
                </p>
                <button className="flex justify-between items-center rounded-full outline bg-black text-base mb-2">
                    <span className="bg-white rounded-full px-2 py-1 text-sm font-semibold md:px-3 md:py-2">View More</span>
                    <span className="text-white p-1">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                      </svg>
                    </span>
                  </button>
              </div>
            </div>
          </div> 
        </div>
      </section>
    </main>
  )
}

export default HomePage