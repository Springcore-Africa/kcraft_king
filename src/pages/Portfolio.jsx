import React from 'react'
import Footer from '../components/Footer'
import TopNav from '../components/TopNav'

import {Projects} from '../utils/Projects'
import Card from '../components/Card'

function Portfolio() {

  if(!localStorage.getItem('projects')) {
    localStorage.setItem('projects', JSON.stringify(Projects));
  }

  return (
    <main className='overflow-x-hidden'>
      <TopNav />

      <section className='p-5'>
        <div className=" text-center pb-8">
          <section 
           className=" bg-[url('./assets/1-New-Size-11.jpg')] h-[40dvh] min-h-[200px] bg-position-[center_top_70%] bg-cover flex flex-col justify-center items-center rounded-2xl relative lg:h-[40dvh] 
          
          ">
            <h1 className=' text-5xl font-semibold text-white pb-3'>Our Portfolio</h1>
          </section>
          <div className=' py-2'>
            <h1 className=' text-2xl font-semibold text-slate-700'>
              A selection of our recent work showcasing modern architecture
            </h1>
          </div>
        </div>

        <div className=' flex items-center gap-2 px-4 pb-3'>
          <span 
            className=" size-1.5 bg-slate-700 block relative rounded 
            before:animate-ping before: before:absolute before:content-[''] before:size-2 before:bg-slate-700 before:top-1/2 before:left-1/2 before:-translate-1/2 before:rounded
          ">
          </span>
          <p className=' text-slate-700'>Featured Projects</p>
        </div>

        <div className=' py-2 px-4 grid grid-cols-2 gap-4 md:grid-cols-3 xl:grid-cols-4'>
          {Projects.map((project, index) => (
            <Card 
              key={index}
              id={project.id}
              img={project.img}
              buildingName={project.buildingName}
              desc={project.desc}
              gallery={project.gallery}
              floorPlan={project.floorPlan}
              features={project.features}
            />
          ))}
        </div>
      </section>
      <Footer />
      
    
    </main>
  )
}

export default Portfolio