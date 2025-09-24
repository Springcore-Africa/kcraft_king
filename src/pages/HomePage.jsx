import React from 'react'
import {Link, Outlet} from 'react-router-dom'
import {Swiper, SwiperSlide} from 'swiper/react'
import {Pagination,Navigation,Autoplay} from 'swiper/modules'
import { HeroSlides } from "../data/HeroSlides";
import { motion } from "framer-motion";
import logo from '../assets/k-craft/full-logo1.png'
import { projects } from "../data/HomeProjectData";
import { teamMembers } from "../data/TeamData";
import { buildings } from "../data/Buildings";

import 'swiper/css'
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import TopNav from '../components/TopNav';
import Footer from '../components/Footer';



function HomePage() {

  return (
    <>
      <main className='overflow-x-hidden relative'>
        <TopNav />
        <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      slidesPerView={1}
      pagination={{ clickable: true }}
      loop
    >
      {HeroSlides.map((slide) => (
        <SwiperSlide key={slide.id}>
          
          <section
           className="relative min-h-[50dvh] bg-center bg-cover text-white px-5 overflow-hidden m-5 rounded-md flex justify-center items-center z-0"
           style={{ backgroundImage: `url(${slide.image})` }}
          >
          <motion.img
  src={logo}
  alt="KCraft Logo"
  className="w-42 h-42 md:w-58 md:h-58 object-contain 
             absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
  initial={{ y: -200, opacity: 0, scale: 0.5 }}
  animate={{
    y: [0, -15, 0],  
    opacity: 1,
    scale: 1,
  }}
  transition={{
    y: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
    },
    opacity: { duration: 1.5, ease: "easeOut" },
    scale: { duration: 1.5, ease: "easeOut" },
  }}
/>

  <div className="absolute inset-0 bg-black/40 rounded-md"></div>

            <div className="px-5 flex flex-col items-start gap-16 justify-end h-10/12 pb-5">
              {slide.extraText && (
                <p className="hidden w-1/3 text-lg lg:block">{slide.extraText}</p>
              )}

              <div className="flex justify-between items-end w-full">
                <div className="md:w-2/3">
                  <h1 className="text-7xl">{slide.title}</h1>
                  <div className="sm:flex sm:gap-3 sm:items-center">
                    <span className="italic font-serif text-6xl pb-4 block md:inline">
                      {slide.subtitle}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </SwiperSlide>
      ))}
    </Swiper>

        <section className='py-5 px-10'>
          <div className="py-5 box-border md:flex md:items-start">
            <ul className=" list-disc pl-5 pb-5 md:w-1/3">
              <li className=" font-bold text-xl">
                WHO WE ARE
              </li>
            </ul>
            <div className=" md:w-2/3">
              <p className="font-semibold text-xl">We are a full-service architectural firm dedicated to transforming visions into reality. Our expertise spans conceptual design, detailed 3D visualization, and end-to-end supervision of the building process — ensuring every project is delivered with precision and excellence.</p>
            </div>
          </div>

          <hr className='border-zinc-700'/>

          <div>
            <div className=" flex justify-between gap-10 items-start py-5">
              <div className="max-w-1/3">
                <h1 className=" leading-[30px] text-5xl"><span>At</span><br/><span className='italic font-serif text-4xl'>Kcraft-King</span></h1>
              </div>
              <div className=" hidden max-w-1/3 lg:block ml-[-100px]">
                <p>
                  Our services cover architectural design, structural planning, interior design, urban development strategies, and project management, allowing us to provide seamless solutions from concept to completion.</p>
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
      {projects.map((project) => (
        <div key={project.id} className="px-3 pb-5 pt-3 md:w-1/3">
          <div
            className='relative overflow-hidden aspect-[4/5] mini-loop pb-3
              before:absolute before:w-1/2 before:left-1/2 before:h-6 before:top-0 
              before:-translate-1/2 before:content-[""]
              after:absolute after:w-1/2 after:left-1/2 after:h-6  
              after:-translate-1/2 after:content-[""]'
          >
            <img src={project.image} alt={project.title} className="w-full h-full object-cover rounded-md" />
          </div>
          <ul className="list-disc pl-5">
            <li className="text-zinc-700">{project.location}</li>
          </ul>
          <h4 className="text-xl font-semibold">{project.title}</h4>
        </div>
      ))}
    </div>
        </section>

        <section className='py-5 px-10'>
          <div className="py-5 box-border md:flex">
            <ul className=" list-disc pl-5 pb-5 md:w-1/3">
              <li className=" font-bold text-xl">
                Our Architects
              </li>
            </ul>
            <div className="md:w-2/3">
      <table className="w-full">
        <tbody>
          {teamMembers.map((member) => (
            <tr
              key={member.id}
              className="border-t border-t-zinc-400 group *:p-3 hover:border-t-black *:text-zinc-500 *:group-hover:text-black transition-all duration-500 ease-in"
            >
              <td>
                <div className="w-14 aspect-square bg-red-200 rounded-md cursor-pointer">
                  {member.image && (
                    <img src={member.image} alt={member.name} className="rounded-md" />
                  )}
                </div>
              </td>
              <td>
                <p className="font-semibold text-md">{member.name}</p>
              </td>
              <td>
                <ul className="list-disc text-md">
                  <li>{member.role}</li>
                </ul>
              </td>
              <td>
                <Link to={member.profileLink}>
                  <p className="text-xs">View Profile</p>
                </Link>
              </td>
            </tr>
          ))}
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

            <div>
      {buildings.map((building) => (
        <div
          key={building.id}
          className="border-t border-t-zinc-600 px-3 py-2 md:flex md:flex-row-reverse md:py-4 md:justify-between"
        >
          <div className="w-full aspect-video overflow-hidden md:w-1/2 lg:w-1/3">
            <img
              src={building.image}
              alt={building.name}
              className="w-full h-full object-cover rounded-md"
            />
          </div>
          <div className="md:w-1/2">
            <h4 className="font-semibold text-lg pb-2 md:text-xl">
              {building.name}
            </h4>
            <p className="pb-2 text-md md:text-base">
              {building.description}
            </p>
            <Link to={building.link}>
              <button className="flex justify-between items-center rounded-full outline bg-neutral-900 text-base mb-2">
                <span className="bg-white rounded-full px-2 py-1 text-sm font-semibold md:px-3 md:py-2">
                  View More
                </span>
                <span className="text-white p-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m8.25 4.5 7.5 7.5-7.5 7.5"
                    />
                  </svg>
                </span>
              </button>
            </Link>
          </div>
        </div>
      ))}
    </div>
          </div>
        </section>

        <Footer />
        
      </main>
      <Outlet />
    </>
  )
}

export default HomePage