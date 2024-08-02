"use client"
import { motion } from 'framer-motion';
import React from 'react';
import { MdOutlineArrowOutward } from "react-icons/md";

const services = [
  {
    title: "IOT Products",
    description: "High-quality IOT products to meet all your needs and future proof technologies with tension free use.",
    image: "https://plus.unsplash.com/premium_photo-1661414432619-290cff769e15?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link:"/iot"
  },
  {
    title: "Digital Marketing",
    description: "Expand your reach with our digital marketing solutions. Our comprehensive strategies will help you connect with your target audience.",
    image: "https://images.unsplash.com/photo-1483058712412-4245e9b90334?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link:"/marketing"
  },
  {
    title: "Web and App Services",
    description: "Professional web and app development services to bring your ideas to life with cutting-edge technology and design.",
    image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link:"/webappservices"
  },
  {
    title: "Biodegradable Products",
    description: "Eco-friendly biodegradable products for a sustainable future and good health.",
    image: "https://images.unsplash.com/photo-1484632105053-8662f3194e7f?q=80&w=1966&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link:"/biodegradable"
  },
];

const Services = () => {
  return (
    <motion.div
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 100 }}
      transition={{ duration: 0.8 }}
      className="px-20 "
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-10 lg:px-2">
        <div className="flex flex-start">
          <motion.h2
           whileInView={{opacity:1,y:0}}
           initial={{opacity:0,y:100}}
           transition={{duration:0.8}}
           className="heading-2 text-7xl bg-clip-text text-transparent bg-gradient-to-b dark:from-neutral-50 to-neutral-400 from-neutral-500 to-neutral-900 font-semibold tracking-wide">
            Services that we Provide.
          </motion.h2>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-2 cursor-pointer">
          {services.map((service, index) => (
            <div key={index} className="flex flex-col items-center rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out p-6 bg-slate-700 dark:bg-slate-600">
              <div className="w-full h-80 bg-cover bg-center mb-4 rounded-lg " style={{ backgroundImage: `url(${service.image})` }}></div>
              <h3 className="text-3xl font-semibold bg-clip-text text-transparent bg-gradient-to-b dark:from-neutral-50 to-neutral-400 from-neutral-300 to-neutral-300 text-center mb-5">{service.title}</h3>
              <p className="text-lg text-center text-gray-300 para">{service.description}</p>
              <a href={service.link} className='text-xl  m-10   text-gray-300 hover:text-gray-100 heading-2 flex flex-row gap-1  ' target="_blank"> View <MdOutlineArrowOutward  className="text-3xl text-gray-200 hover:text-red-500"/></a>
            </div>
          ))}
        </div>

        {/* <div className="flex justify-center items-center">
          <a href="" className="">
            <button className="bg-slate-500 p-3 rounded-lg mt-10 text-white text-md font-semibold hover:bg-slate-600">Explore More.</button>
          </a>
        </div> */}
      </div>
    </motion.div>
  );
};

export default Services;
