import React, {useState}from 'react'
import Footer from '../components/Footer'
import {Link, Outlet} from 'react-router-dom'

import logo from '../assets/k-craft/header-logo.png'
import TopNav from '../components/TopNav';

function ContactUsPage() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  }
  
  return (
    <main className=' overflow-x-hidden'>
      <TopNav />
      <section className='p-5'>
        <div className=" text-center pb-8">
          <section 
           className=" bg-[url('./assets/1-New-Size-11.jpg')] h-[40dvh] min-h-[200px] bg-position-[center_top_70%] bg-cover flex flex-col justify-center items-center rounded-2xl relative lg:h-[40dvh] 
          
          ">
            <h1 className=' text-6xl font-semibold text-white pb-3'>Get in Touch With Us</h1>
            <p className=' text-slate-600 py-5 hidden '>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate, dignissimos beatae earum possimus, eum nulla magni optio perferendis accusamus nesciunt quos placeat eius tempora .
            </p>
          </section>
        </div>
        <div className=" md:flex md:justify-between md:items-start md:*:w-[48%]">
          <div className=" bg-zinc-100 rounded-md py-7 px-8 mb-8">
            <h3 className=' text-3xl'>Have Questions? We're Just a Message Away!</h3>
            <span className=' block pb-3'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque rem dolorum maiores pariatur sunt! Velit placeat veniam obcaecati.</span>
            <form action="">
              <div className=' sm:flex sm:justify-between sm:items-center sm:*:w-[48%] md:flex-col md:*:w-full lg:flex-row lg:*:w-[48%]'>
                <div className=" pb-3 *:block">
                  <label htmlFor='' className=' pb-2'>First Name</label>
                  <input type="text" placeholder='Firstname' className='bg-white w-full py-2 px-4 rounded active:outline-2 active:outline-slate-600 focus:outline-2 focus:outline-slate-600 text-zinc-500 placeholder:text-zinc-500'/>
                </div>
                <div className=" pb-3 *:block">
                  <label htmlFor="" className=' pb-2'>Last Name</label>
                  <input type="text" placeholder='Lastname' className='bg-white w-full py-2 px-4 rounded active:outline-2 active:outline-slate-600 focus:outline-2 focus:outline-slate-600 text-zinc-500 placeholder:text-zinc-500 '/>
                </div>
              </div>
              <div className=" pb-3 *:block">
                <label htmlFor="" className=' pb-2'>E-mail</label>
                <input type='email' placeholder='something@gmail.com' className='bg-white w-full py-2 px-4 rounded active:outline-2 active:outline-slate-600 focus:outline-2 focus:outline-slate-600 text-zinc-500 placeholder:text-zinc-500'/>
              </div>
              <div className=" pb-3 *:block">
                <label htmlFor="" className=' pb-2'>Phone Number</label>
                <input type="text" placeholder='+2348010152029' className='bg-white w-full py-2 px-4 rounded active:outline-2 active:outline-slate-600 focus:outline-2 focus:outline-slate-600 text-zinc-500 placeholder:text-zinc-500'/>
              </div>
              <div className=" pb-3 *:block">
                <label htmlFor="" className=' pb-2'>Subject</label>
                <select name="" id="" value='' className='bg-white w-full py-2 px-4 rounded active:outline-2 active:outline-slate-600 focus:outline-2 focus:outline-slate-600 text-zinc-500 placeholder:text-zinc-500' >
                  <option value="" className=''>Choose message subject</option>
                  <option value="">Feedback</option>
                  <option value="">Complaint</option>
                </select>
              </div>
              <div className=" pb-5 *:block">
                <label htmlFor="" className=' pb-2'>Message</label>
                <textarea name="" id="" placeholder='Leave us a message' className='bg-white w-full py-2 px-4 rounded active:outline-2 active:outline-slate-600 focus:outline-2 focus:outline-slate-600 text-zinc-500 placeholder:text-zinc-500 min-h-30 resize-none' >
                </textarea>
              </div>
              <div className=" pb-3 flex justify-center items-center">
                <button className=' bg-slate-600 text-white py-2 px-3 rounded-full flex justify-between items-center gap-2'>
                  <span className='block'>
                    Send Message
                  </span>
                  <span className=' flex justify-center items-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                    </svg>
                  </span>
                </button>
              </div>
            </form>
          </div>

          <div className="">
            <div className=" background bg-slate-600 text-white min-h-[200px] h-[30dvh] py-7 px-8 flex flex-col justify-end rounded-md mb-4 lg:h-[50dvh]">
              <p className='text-2xl md:text-4xl'>Our Experts will always help you</p>
            </div>

            <div className=" bg-zinc-50 py-8 p-4 rounded-md">
              <div className=" bg-slate-300 mb-6 px-3 py-2 rounded-md flex items-center gap-3">
                <div className="bg-white size-8 flex justify-center items-center rounded-full text-slate-600">
                  <span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 9v.906a2.25 2.25 0 0 1-1.183 1.981l-6.478 3.488M2.25 9v.906a2.25 2.25 0 0 0 1.183 1.981l6.478 3.488m8.839 2.51-4.66-2.51m0 0-1.023-.55a2.25 2.25 0 0 0-2.134 0l-1.022.55m0 0-4.661 2.51m16.5 1.615a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V8.844a2.25 2.25 0 0 1 1.183-1.981l7.5-4.039a2.25 2.25 0 0 1 2.134 0l7.5 4.039a2.25 2.25 0 0 1 1.183 1.98V19.5Z" />
                    </svg>
                  </span>
                </div>
                <div className="">
                  <p className=' font-semibold'>Email</p>
                  <span className=' text-sm text-zinc-700'>support@kcraftking.com</span>
                </div>
              </div>

              <div className=" bg-slate-300 mb-6 px-3 py-2 rounded-md flex items-center gap-3">
                <div className="bg-white size-8 flex justify-center items-center rounded-full text-slate-600">
                  <span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                    </svg>
                  </span>
                </div>
                <div className="">
                  <p className=' font-semibold'>Call</p>
                  <span className=' text-sm text-zinc-700'> +234(0) 801 015 2029</span>
                </div>
              </div>

              <div className=" bg-slate-300 mb-6 px-3 py-2 rounded-md flex items-center  gap-3">
                <div className="bg-white size-8 flex justify-center items-center rounded-full text-slate-600">
                  <span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                    </svg>
                  </span>
                </div>
                <div className="">
                  <p className=' font-semibold'>Address</p>
                  <span className=' text-sm text-zinc-700'>No. 4 Cambridge Avenue, Porthacourt, Rivers State.</span>
                </div>
              </div>

              <div className=" bg-slate-300 mb-6 px-3 py-2 rounded-md flex items-center gap-3">
                <div className="bg-white size-8 flex justify-center items-center rounded-full text-slate-600">
                  <span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z" />
                    </svg>
                  </span>
                </div>
                <div className="">
                  <p className=' font-semibold'>Working Hours</p>
                  <span className=' text-sm text-zinc-700'>Mon-Fri 9:00AM - 6:00PM (GMT+1:00)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
      <Outlet />
    </main>
  )
}

export default ContactUsPage