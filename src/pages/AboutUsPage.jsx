import React, {useState} from 'react'
import {Link, Outlet} from 'react-router-dom'

import TopNav from '../components/TopNav'
import Footer from '../components/Footer'

import img1 from '../assets/k-craft/img-1.jpg'
import logo from '../assets/k-craft/header-logo.png'

function AboutUsPage() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  }
  return (
    <main className='overflow-x-hidden'>
    
      <TopNav />

      <section className='p-5'>
        <section 
        className=" bg-[url('./assets/4.-Create-Interior-Design-Cannon-Pl.jpg')] h-[20dvh] min-h-[200px] bg-center bg-cover flex flex-col justify-center items-center rounded-2xl relative lg:h-[40dvh]
        
        ">
          {/* <TopNav /> */}
          <h1 className='text-5xl text-white uppercase'>About Us</h1>
        </section>
        <div className=' py-2'>
          <h1 className=' text-4xl font-semibold text-slate-700'>
            Discover the Art and Science of Designing Buildings
          </h1>
        </div>

        <section className=' pt-5'>
          <div>
            <div className=' flex items-center gap-2'>
              <span 
              className=" size-1.5 bg-slate-700 block relative rounded 
              before:animate-ping before: before:absolute before:content-[''] before:size-2 before:bg-slate-700 before:top-1/2 before:left-1/2 before:-translate-1/2 before:rounded
              ">
              </span>
              <p className=' text-slate-700'>About Us</p>
            </div>

            <div className=' pt-5 pb-3'>
              <h4 className=' text-xl font-semibold'>Get to know about us</h4>
            </div>
          </div>
          <div className=" py-2 md:flex md:*:w-[48%] md:justify-between">
            <div className=" grid grid-cols-2 gap-2">
              <div className=" bg-zinc-100 p-3 rounded-md flex flex-col gap-3 justify-start md:justify-end">
                <h3 className=' text-4xl font-semibold'>200+</h3>
                <p className=' text-zinc-700'>Loyal Customers</p>
              </div>
              <div className=" bg-zinc-100 p-3 rounded-md flex flex-col gap-3 justify-start md:justify-end">
                <h3 className=' text-4xl font-semibold'>50+</h3>
                <p className=' text-zinc-700'>Properties Sold</p>
              </div>
              <div className=" bg-zinc-100 p-3 rounded-md flex flex-col gap-3 justify-start md:justify-end">
                <h3 className=' text-4xl font-semibold'>97%</h3>
                <p className=' text-zinc-700'>Customer Satisfaction Rate</p>
              </div>
              <div className=" bg-zinc-100 p-3 rounded-md flex flex-col gap-3 justify-start md:justify-end">
                <h3 className=' text-4xl font-semibold'>5</h3>
                <p className=' text-zinc-700'>Years of service</p>
              </div>
            </div>
            <div className=" py-5">
              <h4 className=' text-2xl pb-3'>
                Discover your next home with us. 
                <br/>
                Your journey starts here
              </h4>
              <p className=' text-zinc-700'>
                At <span className='uppercase'>kcraft King</span>, we are committed to helping you find the perfect place to call home. With 5 years of experience in the real estate industry, we have built a reputation for excellence, transparency, and customer satisfaction. We strive to make property ownership and investment accessible, stress-free, and rewarding for our clients. We envision a future where finding and owning a home is effortless, transparent, and accessible to everyone.
              </p>
            </div>
          </div>
        </section>
        <section className='py-5'>
          <div className=' flex items-center gap-2'>
            <span 
              className=" size-1.5 bg-slate-700 block relative rounded 
              before:animate-ping before: before:absolute before:content-[''] before:size-2 before:bg-slate-700 before:top-1/2 before:left-1/2 before:-translate-1/2 before:rounded
            ">
            </span>
            <p className=' text-slate-700'>Our Team</p>
          </div>

          <div className=' py-5 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4'>
            <div className=" col-span-2 lg:col-span-1 lg:row-span-2 min-h-[250px]">
              <h4 className=' text-2xl pb-3'>
                Meet the Architects Behind <span className='uppercase'>kcraft King</span>
              </h4>
              <p className=' text-zinc-700 pb-3'>
                Get to know the passionate team behind <span className='uppercase'>kcraft King</span>—a group of decicated and briliant architects who bring your designs to life
              </p>
              <Link to='/contact-us'>
                <button className=' py-2 px-3 text-slate-700 rounded-md border-2 border-zinc-200 active:bg-zinc-200'>
                  Contact Our Team
                </button>
              </Link>
            </div>

            <div className=" bg-zinc-100 flex flex-col justify-between p-3 rounded-md max-h-[612px] row-span-2">
              <div className=' w-full aspect-[1/2.43] pb-2 rounded-md overflow-hidden'>
                <img src={img1} alt="" className=' size-full object-cover rounded-md' />
              </div>
              <div className=''>
                <h5 className='font-semibold text-slate-700'>Full Name</h5>
                <p className=' text-zinc-600'>Position</p>
              </div>
            </div>

            <div className=" bg-zinc-100 flex flex-col justify-between p-3 rounded-md max-h-[300px]">
              <div className=' w-full aspect-square pb-2 overflow-hidden'>
                <img src={img1} alt="" className=' size-full object-cover rounded-md' />
              </div>
              <div className=''>
                <h5 className='font-semibold text-slate-700'>Full Name</h5>
                <p className=' text-zinc-600'>Position</p>
              </div>
            </div>

            <div className=" bg-zinc-100 flex flex-col justify-between p-3 rounded-md max-h-[300px]">
              <div className=' w-full aspect-square pb-2 overflow-hidden'>
                <img src={img1} alt="" className=' size-full object-cover rounded-md' />
              </div>
              <div className=''>
                <h5 className='font-semibold text-slate-700'>Full Name</h5>
                <p className=' text-zinc-600'>Position</p>
              </div>
            </div>

            <div className=" bg-zinc-100 flex flex-col justify-between p-3 rounded-md max-h-[300px]">
              <div className=' w-full aspect-square pb-2 overflow-hidden'>
                <img src={img1} alt="" className=' size-full object-cover rounded-md' />
              </div>
              <div className=''>
                <h5 className='font-semibold text-slate-700'>Full Name</h5>
                <p className=' text-zinc-600'>Position</p>
              </div>
            </div>

            <div className=" bg-zinc-100 flex flex-col justify-between p-3 rounded-md max-h-[300px]">
              <div className=' w-full aspect-square pb-2 overflow-hidden'>
                <img src={img1} alt="" className=' size-full object-cover rounded-md' />
              </div>
              <div className=''>
                <h5 className='font-semibold text-slate-700'>Full Name</h5>
                <p className=' text-zinc-600'>Position</p>
              </div>
            </div>

            <div className=" bg-zinc-100 flex flex-col justify-between p-3 rounded-md max-h-[300px]">
              <div className=' w-full aspect-square pb-2 overflow-hidden'>
                <img src={img1} alt="" className=' size-full object-cover rounded-md' />
              </div>
              <div className=''>
                <h5 className='font-semibold text-slate-700'>Full Name</h5>
                <p className=' text-zinc-600'>Position</p>
              </div>
            </div>

            <div className=" bg-zinc-100 flex flex-col justify-between p-3 rounded-md max-h-[300px]">
              <div className=' w-full aspect-square pb-2 overflow-hidden'>
                <img src={img1} alt="" className=' size-full object-cover rounded-md' />
              </div>
              <div className=''>
                <h5 className='font-semibold text-slate-700'>Full Name</h5>
                <p className=' text-zinc-600'>Position</p>
              </div>
            </div>

            <div className=" bg-zinc-100 flex flex-col justify-between p-3 rounded-md max-h-[300px]">
              <div className=' w-full aspect-square pb-2 overflow-hidden'>
                <img src={img1} alt="" className=' size-full object-cover rounded-md' />
              </div>
              <div className=''>
                <h5 className='font-semibold text-slate-700'>Full Name</h5>
                <p className=' text-zinc-600'>Position</p>
              </div>
            </div>

            <div className=" bg-zinc-100 flex flex-col justify-between p-3 rounded-md max-h-[300px]">
              <div className=' w-full aspect-square pb-2 overflow-hidden'>
                <img src={img1} alt="" className=' size-full object-cover rounded-md' />
              </div>
              <div className=''>
                <h5 className='font-semibold text-slate-700'>Full Name</h5>
                <p className=' text-zinc-600'>Position</p>
              </div>
            </div>
          </div>
        </section>
      </section>

      <section className=" my-5 py-5 bg-[url('./assets/pexels-pixabay-258154.jpg')] bg-center bg-cover h-[30dvh] min-h-[200px] w-full flex flex-col justify-center items-center gap-2 md:gap-4 text-white md:h-[50dvh]">
        <h2 className=' text-2xl md:text-4xl'>Ready to Create Your Home</h2>
        <p className=''>Join the community today and unlock the ultimate experience</p>
        <button className=' py-2 px-3 rounded-3xl bg-slate-200 text-slate-700'>Get Started Now</button>
      </section>

      <Footer />
      <Outlet />
    </main>
  )
}

export default AboutUsPage