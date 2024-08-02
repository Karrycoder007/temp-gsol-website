import { motion } from 'framer-motion';
import React from 'react';
import 'swiper/css';

const Vision = () => {
  return (
    <div className="container mx-auto mt-20 mb-10">
      {/* <h1 className="text-8xl font-medium text-center text-transparent bg-clip-text bg-gradient-to-b from-gray-500 to-gray-800 mt-10">
        Our Vision
      </h1> */}
      <motion.div 
       whileInView={{opacity:1, y:0}}
       initial={{opacity:0, y:100}}
       transition={{duration:0.8}}
       className="mt-10 px-10 flex flex-col lg:flex-row justify-center items-center gap-10">
        <img
          src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1784&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          className="bg-black opacity-90 lg:h-3/5 w-4/5 lg:w-2/5 hover:shadow-md hover:scale-105 ease-in-out rounded-md "
        />
        <div className="text-center lg:text-left lg:w-2/5">
          <motion.h2
           whileInView={{opacity:1, y:0}}
           initial={{opacity:0, y:100}}
           transition={{duration:0.8}}
           className="text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-b from-gray-500 to-gray-800 mb-4 heading-2">
            Grudhra Solutions Vision
          </motion.h2> 
          <motion.p
           whileInView={{opacity:1, y:0}}
           initial={{opacity:0, y:100}}
           transition={{duration:0.8}}
           className="text-xl text-gray-600 mb-4 para">
            At Grudhra Solutions, we are committed to delivering innovative and sustainable solutions across various sectors. Our offerings include website and app development, marketing services, IT solutions, and eco-friendly products such as biodegradable plates and kitchenware.
          </motion.p>
          <motion.p
           whileInView={{opacity:1, y:0}}
           initial={{opacity:0, y:100}}
           transition={{duration:0.8}}
           className="text-xl text-gray-600 mb-4 para">
            Our team is dedicated to providing top-notch services tailored to meet the unique needs of each client. We believe in the power of technology to transform businesses and improve lives, and we strive to make a positive impact through our innovative solutions.
          </motion.p>
          
        </div>
      </motion.div>
      <motion.div
       whileInView={{opacity:1, y:0}}
       initial={{opacity:0, y:100}}
       transition={{duration:0.8}}
       className="mt-10 px-10 flex flex-col lg:flex-row justify-center items-center gap-10">
        <div className="lg:text-left lg:w-2/5">
          <motion.h2
           whileInView={{opacity:1, y:0}}
           initial={{opacity:0, y:100}}
           transition={{duration:0.8}}
           className="text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-b from-gray-500 to-gray-800 mb-4 heading-2">
            Our Commitment
          </motion.h2>
          <motion.p 
           whileInView={{opacity:1, y:0}}
           initial={{opacity:0, y:100}}
           transition={{duration:0.8}}
           className="text-xl text-gray-600 para">
            We envision a future where technology and sustainability go hand in hand, creating a positive impact on businesses and the environment. By integrating advanced technology with eco-friendly practices, we strive to lead the way in both industry and environmental stewardship.
          </motion.p>
          <motion.p
           whileInView={{opacity:1, y:0}}
           initial={{opacity:0, y:100}}
           transition={{duration:0.8}}
           className="text-xl text-gray-600 para">
            Our commitment extends beyond just providing services. We aim to be a trusted partner for our clients, working closely with them to understand their goals and challenges. Through collaboration and innovation, we help them achieve their objectives and thrive in a competitive landscape.
          </motion.p>
         
        </div>
        <img
          src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          className="bg-black opacity-90 lg:h-3/5 w-4/5 lg:w-2/5 hover:shadow-md hover:scale-105 rounded-md"
        />
      </motion.div>
    </div>
  );
};

export default Vision;
