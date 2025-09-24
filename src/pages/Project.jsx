import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode, Navigation, Thumbs } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import TopNav from '../components/TopNav';
import Footer from '../components/Footer';

function Project() {
    const location = useLocation();
    const query = new URLSearchParams(location.search).get('query');
    const [project, setProject] = useState(null);
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    useEffect(() => {
        if (location.state) {
            setProject(location.state);
        } else {
            const projects = JSON.parse(localStorage.getItem('projects'));
            const foundProject = projects.find((p) => p.id === parseInt(query));
            if (foundProject) {
                setProject(foundProject);
            }
        }
    }, [location.state, query]);

    if (!project) {
        return <div>Loading...</div>;
    }

    const { img, buildingName, desc, gallery, floorPlan, features, finishedProject,
        buildingProgress, } = project;

    return (
        <main className=''>
            <TopNav />
            <section className="p-4 md:relative">
                <div className="pb-4">
                    <h2 className="text-center text-2xl font-semibold">{buildingName}</h2>
                </div>

                <div className="pb-10 w-[80%] mx-auto">
                    <div className="pb-3">
                        <Swiper
                            loop={true}
                            spaceBetween={10}
                            autoplay={true}
                            thumbs={{ swiper: thumbsSwiper }}
                            modules={[FreeMode, Autoplay, Thumbs]}
                        >
                            <SwiperSlide>
                                <img src={img} alt={buildingName} className="w-full aspect-video object-cover rounded-md" />
                            </SwiperSlide>
                            {gallery.map((image, index) => (
                                <SwiperSlide key={index}>
                                    <img src={image} alt={`Gallery ${index + 1}`} className="w-full aspect-video object-cover rounded-md" />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                    <div className="pb-3">
                        <Swiper
                            onSwiper={setThumbsSwiper}
                            loop={true}
                            spaceBetween={10}
                            slidesPerView={4}
                            freeMode={true}
                            watchSlidesProgress={true}
                            modules={[FreeMode, Navigation, Thumbs]}
                            className=' second-slide'
                        >
                            <SwiperSlide>
                                <img src={img} alt={buildingName} className="w-full aspect-video object-cover rounded-md" />
                            </SwiperSlide>
                            {gallery.map((image, index) => (
                                <SwiperSlide key={index}>
                                    <img src={image} alt={`Gallery ${index + 1}`} className="w-full aspect-video object-cover rounded-md" />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>


                
                <div className="lg:grid lg:grid-cols-[30%_auto] lg:gap-4">
                    <div className=' md:flex md:gap-2 lg:sticky lg:top-[30px] lg:self-start lg:flex-col'>

                        <div className="mb-4 bg-blue-100 p-2 rounded-md md:w-1/2 lg:w-full">
                            
                            <h3 className="text-xl font-semibold pb-2">Building Description</h3>
                            <p className="p-2">{desc}</p>
                        </div>

                        <div className="mb-4 bg-blue-100 p-2 rounded-md md:w-1/2 md:px-4 lg:w-full">
                            <h3 className='text-xl font-semibold pb-2'>Features & Amenities</h3>
                            <ul className='px-2'>
                                {features.map((feature, index) => (
                                <li key={index} className="list-disc pl-2 pb-2 flex items-center">
                                    <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                    </svg>
                                    </span>
                                    <span className="pl-2">{feature}</span>
                                </li>
                                ))}
                            </ul>
                        </div>
                    </div>



                    <div className=''>
                        <div className="pb-4 md:pb-7">
                            <h3 className='text-xl font-semibold pb-2'>From our Gallery</h3>
                            <div className=' md:grid md:grid-cols-2 md:gap-4 lg:w-[98%] mx-auto'>
                                {gallery.map((image, index) => {
                                    return (
                                        <div key={index} className=' aspect-video overflow-hidden pb-2.5 md:pb-0'>
                                            <img src={image} alt="" className="size-full object-cover rounded-md" />
                                        </div>
                                    )
                                })}
                            </div>
                        </div>

                        <div className="pb-4">
                            <h3 className='text-xl font-semibold pb-2'>Floor Plan</h3>
                            <div className="">
                                <div className='pb-3'>
                                    <img src={floorPlan} alt="" className='w-2/3 aspect-video object-cover' />
                                </div>
                                <div>
                                    <p>
                                        This floor plan features an open living and dining space connected to a modern kitchen, with bedrooms positioned for privacy and comfort. Natural light fills the rooms through large windows, while the simple layout ensures both functionality and easy access to outdoor areas.                        
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="pb-4">
                            <h3 className='text-xl font-semibold pb-2'>Building Progress</h3>
                            <div className="">
                                <div className='pb-3'>
                                    <img src={buildingProgress} alt="" className='w-2/3 aspect-video object-cover' />
                                </div>
                                <div>
                                    <p>
                                        The building process moved from careful site preparation and solid foundation work to the gradual rise of the structure, with walls, roofing, and finishes completed step by step to ensure strength, precision, and quality at every stage
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="pb-4">
                            <h3 className='text-xl font-semibold pb-2'>Finished Project</h3>
                            <div className="">
                                <div className='pb-3'>
                                    <img src={finishedProject} alt="" className='w-2/3 aspect-video object-cover' />
                                </div>
                                <div>
                                    <p>
                                        The finished building stands as a modern, well-crafted structure, combining functionality with style, and delivering a comfortable space designed to meet today’s living standards.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </section>
            <Footer />
        </main>
    );
}

export default Project;
