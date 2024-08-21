'use client'

import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import React from 'react';




const Page = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <motion.header 
      whileInView={{opacity:1,y:0}}
      initial={{opacity:0,y:100}}
      transition={{duration:0.8}}
      className="bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text p-4 text-center">
        <h1 className="text-6xl font-bold heading-2">Grudhra Solutions</h1>
        <p className="mt-5 para">Innovative Solutions for a Sustainable Future</p>
      </motion.header>

      <section className="mt-10">
        <div className="flex flex-col  items-center justify-around">
          
          <motion.div
          whileInView={{opacity:1,y:0}}
          initial={{opacity:0,y:100}}
          transition={{duration:0.8}}
           className="max-w-6xl text-center px-10">
            <h2 className="text-4xl flex justify-center font-semibold text-blue-900 mb-4">About Us</h2>
            <p className="text-gray-700 leading-relaxed para mb-4 text-xl">
              At Grudhra Solutions, we are committed to delivering top-notch services in IT, IoT products, web and app development, digital marketing, and eco-friendly products. Our team of experts works tirelessly to provide innovative solutions that not only meet your needs but also contribute to a sustainable future.
            </p>
            <p className="text-gray-700 leading-relaxed para mb-4 text-xl">
              With a strong focus on quality and customer satisfaction, we strive to exceed expectations in every project we undertake. Our comprehensive range of services ensures that we can cater to the unique needs of each client, helping them to achieve their business goals efficiently and effectively.
            </p>
           
           
          </motion.div>
        </div>
      </section>
     

      <section className="mt-10 bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-6xl font-semibold text-blue-900 text-center mb-4 heading-2">Our Services</h2>
        <motion.div
        whileInView={{opacity:1,y:0}}
        initial={{opacity:0,y:100}}
        transition={{duration:0.8}}
         className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              title: 'IoT Products',
              description: 'Our IoT solutions are designed to enhance connectivity and improve operational efficiency.',
              image: 'https://images.unsplash.com/photo-1596658591534-591d75e2f2f7?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            },
            {
              title: 'Web & App Services',
              description: 'We create stunning websites and mobile apps tailored to your business needs.',
              image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            },
            {
              title: 'Digital Marketing',
              description: 'Our digital marketing strategies are aimed at maximizing your online presence.',
              image: 'https://images.unsplash.com/photo-1519222970733-f546218fa6d7?q=80&w=1080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            },
            {
              title: 'Biodegradable Products',
              description: 'We promote eco-friendly products that are biodegradable and sustainable.',
              image: 'https://plus.unsplash.com/premium_photo-1661425664581-5d6e867fa233?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            }
          ].map((service, index) => (
            <div key={index} className="p-4 bg-gray-100 rounded-lg shadow-md">
              <img src={service.image} alt={service.title} className="w-full h-48 object-cover mb-4 rounded-lg"/>
              <h3 className="text-xl font-bold text-blue-800 mb-2">{service.title}</h3>
              <p className="text-gray-700">{service.description}</p>
            </div>
          ))}
        </motion.div>
      </section>

      <section className="mt-10 p-6">
        <motion.div 
        whileInView={{opacity:1,y:0}}
        initial={{opacity:0,y:100}}
        transition={{duration:0.8}}
        className="bg-gradient-to-b from-gray-700 to-[#1b327b] bg-clip-text text-transparent p-6 rounded-lg text-center">
          <motion.h2
          whileInView={{opacity:1,y:0}}
          initial={{opacity:0,y:100}}
          transition={{duration:1.2}}
           className="text-5xl font-semibold mb-4 heading-2">Our Story</motion.h2>
          <motion.p
          whileInView={{opacity:1,y:0}}
          initial={{opacity:0,y:100}}
          transition={{duration:0.8}}
           className="max-w-6xl mx-auto leading-relaxed para text-2xl">
            Grudhra Solutions was founded with the vision of creating innovative and sustainable solutions for businesses across the globe. Our commitment to quality and customer satisfaction has earned us a reputation as a trusted partner. We believe in harnessing technology to make a positive impact on the world, and we are dedicated to helping our clients achieve their goals while promoting environmental sustainability.
          </motion.p>
        </motion.div>
      </section>

      <Footer/>
    </div>
  );
}

export default Page;
