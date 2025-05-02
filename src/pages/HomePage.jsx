import React, { useState } from 'react'
import TopNav from '../components/TopNav';

import Img1 from '../assets/k-craft/img-1.jpg';
import Img2 from '../assets/k-craft/img-2.jpg';
import Img3 from '../assets/k-craft/img-3.jpg';
import Img4 from '../assets/k-craft/img-4.jpg';
import Img5 from '../assets/k-craft/img-5.jpg';
import Img6 from '../assets/k-craft/img-6.jpg';

import logo from '../assets/k-craft/header-logo.png'

function HomePage() {

  return (
    <main className='overflow-x-hidden '>
      <section className=" h-dvh w-dvw max-h-dvh max-w-dvw bg-[url('./assets/k-craft/background-img1.jpg')] bg-center bg-cover text-white px-5 overflow-hidden relative">
        <header className=" flex justify-between items-center min-h-14">
          <img src={logo} alt="" className='max-w-[120px]'/>
          {/* <h2 className=" font-bold uppercase text-lg w-[120px] md:w-fit">Dnoin.inc</h2> */}
          <TopNav />
          <button className=" flex justify-between items-center rounded-full outline bg-white">
            <span className=" bg-[url('./assets/k-craft/background-img1.jpg')] bg-position-[left_80%_top] rounded-full px-2 py-1 md:px-3 md:py-2">Get Started</span>
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
              <button className="flex justify-between items-center rounded-full outline bg-neutral-900 text-base">
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
               relative overflow-hidden aspect-[4/5] mini-loop pb-3
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
               relative overflow-hidden aspect-[4/5] mini-loop pb-3
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

      <section className=" h-dvh max-h-dvh max-w-dvw bg-[url('./assets/k-craft/P1.jpg')] bg-center bg-cover text-white px-5 overflow-hidden relative box-border">
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
              <span className=" bg-[url('./assets/k-craft/P1.jpg')] bg-position-[left_top_90%] md:bg-position-[left_70%_top_80%] rounded-full px-2 py-1 md:px-3 md:py-2 ">Contact us</span>
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
                <img src={Img4} alt="" className='w-full h-full object-cover' />
              </div>
              <div className='md:w-1/2'>
                <h4 className='font-semibold text-lg pb-2 md:text-xl'>Building Fullname</h4>
                <p className=' pb-2 text-md md:text-base'>
                  Some minor text about the building that does not take much space
                </p>
                <button className="flex justify-between items-center rounded-full outline bg-neutral-900 text-base mb-2">
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
                <img src={Img5} alt="" className='w-full h-full object-cover' />
              </div>
              <div className='md:w-1/2'>
                <h4 className='font-semibold text-lg pb-2 md:text-xl'>Building Fullname</h4>
                <p className=' pb-2 text-md md:text-base'>
                  Some minor text about the building that does not take much space
                </p>
                <button className="flex justify-between items-center rounded-full outline bg-neutral-900 text-base mb-2">
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

      <section className='py-5 px-10 bg-neutral-900 text-gray-50'>
        <div className="py-10 lg:flex lg:justify-between lg:items-start">
          <div className=" py-3">
            <h2 className=' uppercase font-semibold pb-4'>Contact</h2>
            <ul className=' *:pb-3'>
              <li>
                <div className=" flex items-center gap-3">
                  <span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205 3 1m1.5.5-1.5-.5M6.75 7.364V3h-3v18m3-13.636 10.5-3.819" />
                    </svg>
                  </span>
                  <span className=' uppercase'>Kcraft king design</span>
                </div>
              </li>
              <li>
                <div className=" flex items-center gap-3">
                  <span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                    </svg>
                  </span>
                  <span>+234(0) 813 452 1169</span>
                </div>
              </li>
              <li>
                <div className=" flex items-center gap-3">
                  <span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                    </svg>
                  </span>
                  <span>Nwachukwujoseph2095@gmail.com</span>
                </div>
              </li>
              <li>
                <div className=" flex items-center gap-3">
                  <span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                    </svg>
                  </span>
                  <span>No. 4 Cambridge Avenue, Porthacourt, Rivers State.</span>
                </div>
              </li>
            </ul>
          </div>

          <div className=' md:flex items-start gap-24 lg:min-w-1/2'>
            <div className="py-3">
              <h2 className=' uppercase font-semibold pb-4'>Explore</h2>
              <ul className=' *:pb-3'>
                <li>
                  <div className=" flex items-center gap-3 group">
                    <span className=' group-hover:translate-x-1 transition-all duration-300 ease-in'>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                      </svg>
                    </span>
                    <span>Projects</span>
                  </div>
                </li>
                <li>
                  <div className=" flex items-center gap-3 group">
                    <span className=' group-hover:translate-x-1 transition-all duration-300 ease-in'>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                      </svg>
                    </span>
                    <span>About</span>
                  </div>
                </li>
                <li>
                  <div className=" flex items-center gap-3 group">
                    <span className=' group-hover:translate-x-1 transition-all duration-300 ease-in'>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                      </svg>                    
                    </span>
                    <span>Contact</span>
                  </div>
                </li>
              </ul>
            </div>

            <div className=" py-3">
              <h2 className=' uppercase font-semibold pb-4'>Follow Us</h2>
              <ul className=' flex items-center gap-4'>
                <li className=" p-2 rounded hover:bg-neutral-600 transition-colors duration-150 ease-in">
                  <span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="rgba(255,255,255,1)" className=' size-6'>
                      <path d="M14 13.5H16.5L17.5 9.5H14V7.5C14 6.47062 14 5.5 16 5.5H17.5V2.1401C17.1743 2.09685 15.943 2 14.6429 2C11.9284 2 10 3.65686 10 6.69971V9.5H7V13.5H10V22H14V13.5Z"></path>
                    </svg>
                  </span>
                </li>
                <li className=" p-2 rounded hover:bg-neutral-600 transition-colors duration-150 ease-in">
                  <span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="rgba(255,255,255,1)" className=' size-6'>
                      <path d="M12.001 9C10.3436 9 9.00098 10.3431 9.00098 12C9.00098 13.6573 10.3441 15 12.001 15C13.6583 15 15.001 13.6569 15.001 12C15.001 10.3427 13.6579 9 12.001 9ZM12.001 7C14.7614 7 17.001 9.2371 17.001 12C17.001 14.7605 14.7639 17 12.001 17C9.24051 17 7.00098 14.7629 7.00098 12C7.00098 9.23953 9.23808 7 12.001 7ZM18.501 6.74915C18.501 7.43926 17.9402 7.99917 17.251 7.99917C16.5609 7.99917 16.001 7.4384 16.001 6.74915C16.001 6.0599 16.5617 5.5 17.251 5.5C17.9393 5.49913 18.501 6.0599 18.501 6.74915ZM12.001 4C9.5265 4 9.12318 4.00655 7.97227 4.0578C7.18815 4.09461 6.66253 4.20007 6.17416 4.38967C5.74016 4.55799 5.42709 4.75898 5.09352 5.09255C4.75867 5.4274 4.55804 5.73963 4.3904 6.17383C4.20036 6.66332 4.09493 7.18811 4.05878 7.97115C4.00703 9.0752 4.00098 9.46105 4.00098 12C4.00098 14.4745 4.00753 14.8778 4.05877 16.0286C4.0956 16.8124 4.2012 17.3388 4.39034 17.826C4.5591 18.2606 4.7605 18.5744 5.09246 18.9064C5.42863 19.2421 5.74179 19.4434 6.17187 19.6094C6.66619 19.8005 7.19148 19.9061 7.97212 19.9422C9.07618 19.9939 9.46203 20 12.001 20C14.4755 20 14.8788 19.9934 16.0296 19.9422C16.8117 19.9055 17.3385 19.7996 17.827 19.6106C18.2604 19.4423 18.5752 19.2402 18.9074 18.9085C19.2436 18.5718 19.4445 18.2594 19.6107 17.8283C19.8013 17.3358 19.9071 16.8098 19.9432 16.0289C19.9949 14.9248 20.001 14.5389 20.001 12C20.001 9.52552 19.9944 9.12221 19.9432 7.97137C19.9064 7.18906 19.8005 6.66149 19.6113 6.17318C19.4434 5.74038 19.2417 5.42635 18.9084 5.09255C18.573 4.75715 18.2616 4.55693 17.8271 4.38942C17.338 4.19954 16.8124 4.09396 16.0298 4.05781C14.9258 4.00605 14.5399 4 12.001 4ZM12.001 2C14.7176 2 15.0568 2.01 16.1235 2.06C17.1876 2.10917 17.9135 2.2775 18.551 2.525C19.2101 2.77917 19.7668 3.1225 20.3226 3.67833C20.8776 4.23417 21.221 4.7925 21.476 5.45C21.7226 6.08667 21.891 6.81333 21.941 7.8775C21.9885 8.94417 22.001 9.28333 22.001 12C22.001 14.7167 21.991 15.0558 21.941 16.1225C21.8918 17.1867 21.7226 17.9125 21.476 18.55C21.2218 19.2092 20.8776 19.7658 20.3226 20.3217C19.7668 20.8767 19.2076 21.22 18.551 21.475C17.9135 21.7217 17.1876 21.89 16.1235 21.94C15.0568 21.9875 14.7176 22 12.001 22C9.28431 22 8.94514 21.99 7.87848 21.94C6.81431 21.8908 6.08931 21.7217 5.45098 21.475C4.79264 21.2208 4.23514 20.8767 3.67931 20.3217C3.12348 19.7658 2.78098 19.2067 2.52598 18.55C2.27848 17.9125 2.11098 17.1867 2.06098 16.1225C2.01348 15.0558 2.00098 14.7167 2.00098 12C2.00098 9.28333 2.01098 8.94417 2.06098 7.8775C2.11014 6.8125 2.27848 6.0875 2.52598 5.45C2.78014 4.79167 3.12348 4.23417 3.67931 3.67833C4.23514 3.1225 4.79348 2.78 5.45098 2.525C6.08848 2.2775 6.81348 2.11 7.87848 2.06C8.94514 2.0125 9.28431 2 12.001 2Z"></path>
                    </svg>
                  </span>
                </li>
                <li className=" p-2 rounded hover:bg-neutral-600 transition-colors duration-150 ease-in">
                  <span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="rgba(255,255,255,1)" className=' size-6'>
                      <path d="M10.4883 14.651L15.25 21H22.25L14.3917 10.5223L20.9308 3H18.2808L13.1643 8.88578L8.75 3H1.75L9.26086 13.0145L2.31915 21H4.96917L10.4883 14.651ZM16.25 19L5.75 5H7.75L18.25 19H16.25Z"></path>
                    </svg>
                  </span>
                </li>
              </ul>
            </div>
          </div>

        </div>
        <hr />
        <div className="py-5">
          <p>&copy; 2025 <span className=' uppercase'>Kcraft king design</span>. All rights reserved.</p>
        </div>
      </section>
    </main>
  )
}

export default HomePage