'use client'
import Footer from '@/components/Footer';

import { FaBullhorn, FaChartLine, FaUsers, FaRegLightbulb, FaMobileAlt, FaHandsHelping } from 'react-icons/fa';
import React from 'react';
import { motion } from 'framer-motion';

const page = () => {

  return (
    <div className="container mx-auto  bg-gray-300">
      

      <div className="py-20 px-10 flex flex-col lg:flex-row justify-center items-center gap-10">
        <img
          src="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
          alt="Marketing Strategies"
          className="bg-black opacity-90 lg:h-3/5 w-4/5 lg:w-2/5 hover:shadow-md hover:scale-105 ease-in-out rounded-sm"
        />
        <div className="text-center lg:text-left lg:w-2/5">
          <h2 className="text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-b from-gray-500 to-gray-800 mb-4 heading-2">
            Crafting Cutting-Edge Marketing Campaigns
          </h2>
          <p className="text-xl text-gray-600 mb-4 para">
            At Grudhra Marketing, we specialize in creating innovative marketing solutions tailored to your business needs. Our team of experts leverages the latest strategies to build scalable, efficient, and user-friendly campaigns that drive engagement and growth.
          </p>
          <p className="text-xl text-gray-600 mb-4 para">
            From concept to execution, Grudhra Marketing is your partner in digital innovation. We offer comprehensive services including social media management, content creation, SEO, and more to ensure your online presence is powerful and effective.
          </p>
        </div>
      </div>
      <div className="px-10 py-20 text-center">
        <h2 className="text-5xl font-semibold text-gray-700 mb-4">Why Choose Grudhra Marketing?</h2>
        <p className="text-xl text-gray-600 mb-8 para">
          At Grudhra Marketing, our mission is to elevate your brand through innovative and effective marketing strategies. Here's why clients trust us:
        </p>
        <div className="flex flex-wrap justify-center items-center gap-10">
          <div className="max-w-sm bg-slate-500 shadow-md rounded-lg p-5">
            <img src="https://images.unsplash.com/photo-1522071901873-411886a10004?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Expert Team" className="w-full h-48 object-cover rounded-lg mb-4"/>
            <h3 className="text-2xl font-semibold text-gray-200 mb-2 heading-2">Expert Team</h3>
            <p className="text-gray-200 para">
              Our team of experienced marketers, designers, and strategists work together to deliver top-notch solutions tailored to your needs.
            </p>
          </div>
          <div className="max-w-sm bg-slate-500 shadow-md rounded-lg p-5">
            <img src="https://plus.unsplash.com/premium_photo-1663040543387-cb7c78c4f012?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Cutting-Edge Technology" className="w-full h-48 object-cover rounded-lg mb-4"/>
            <h3 className="text-2xl font-semibold text-gray-200 mb-2 heading-2">Innovative Strategies</h3>
            <p className="text-gray-200 para">
              We use the latest tools and techniques to create scalable, efficient, and impactful marketing campaigns that keep you ahead of the competition.
            </p>
          </div>
          <div className="max-w-sm bg-slate-500 shadow-md rounded-lg p-5">
            <img src="https://plus.unsplash.com/premium_photo-1661484821938-c9f8b585bd21?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Customer Support" className="w-full h-48 object-cover rounded-lg mb-4"/>
            <h3 className="text-2xl font-semibold text-gray-200 mb-2 heading-2">Unmatched Support</h3>
            <p className="text-gray-200 para">
              Our dedicated support team is always ready to assist you, ensuring your campaigns run smoothly and efficiently.
            </p>
          </div>
        </div>
      </div>

      <motion.div 
       whileInView={{ opacity: 1, y: 0 }}
       initial={{ opacity: 0, y: 100 }}
       transition={{ duration: 1 }}
      
      className="px-10 mt-20 bg-gray-300">
        <h2 className="text-4xl font-semibold text-gray-700 text-center mb-14 heading-2">Our Expertise</h2>
        <motion.div
         whileInView={{ opacity: 1, y: 0 }}
         initial={{ opacity: 0, y: 100 }}
         transition={{ duration: 1.2 }}
         className="flex flex-wrap justify-center items-center gap-8 mb-20">
          <div className="text-center p-5 bg-white shadow-md rounded-lg w-48 h-48 flex flex-col justify-center items-center">
            <FaBullhorn className="text-6xl text-blue-600" />
            <p className="mt-2 text-xl text-gray-700">Advertising</p>
          </div>
          <div className="text-center p-5 bg-white shadow-md rounded-lg w-48 h-48 flex flex-col justify-center items-center">
            <FaChartLine className="text-6xl text-green-600" />
            <p className="mt-2 text-xl text-gray-700">SEO</p>
          </div>
          <div className="text-center p-5 bg-white shadow-md rounded-lg w-48 h-48 flex flex-col justify-center items-center">
            <FaUsers className="text-6xl text-yellow-500" />
            <p className="mt-2 text-xl text-gray-700">Social Media</p>
          </div>
          <div className="text-center p-5 bg-white shadow-md rounded-lg w-48 h-48 flex flex-col justify-center items-center">
            <FaRegLightbulb className="text-6xl text-orange-600" />
            <p className="mt-2 text-xl text-gray-700">Content Creation</p>
          </div>
          <div className="text-center p-5 bg-white shadow-md rounded-lg w-48 h-48 flex flex-col justify-center items-center">
            <FaMobileAlt className="text-6xl text-blue-500" />
            <p className="mt-2 text-xl text-gray-700">Mobile Marketing</p>
          </div>
          <div className="text-center p-5 bg-white shadow-md rounded-lg w-48 h-48 flex flex-col justify-center items-center">
            <FaHandsHelping className="text-6xl text-gray-700" />
            <p className="mt-2 text-xl text-gray-700">Consulting</p>
          </div>
        </motion.div>
      </motion.div>

      <Footer />
    </div>
  );
};

export default page;
