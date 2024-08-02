
import React from 'react'
import { FaArrowRight } from 'react-icons/fa';
import cogImage from '../assets/cog.png'
import cylinderImage from '../assets/cylinder.png'
import { motion } from 'framer-motion';

const Herosection = () => {
  return (
    <section className="px-10 pt-8 pb-20  md:pt-5 md:10 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#183EC2,#EAEEFE_100%)] overflow-x-clip">
      <div className="container">
        <div className="md:flex md:gap-10">
        <div className="md:w-[698px]">
          <div className="text-md mb-10 px-1 font-medium">#Grudhra 2.0
          </div>
          <motion.h1
           whileInView={{opacity:1,y:0}}
           initial={{opacity:0,y:100}}
           transition={{duration:1.8}}

          
          className="text-5xl md:text-7xl inline-flex  bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text mb-8 heading-2">Dreams and <br /> innovation for future </motion.h1>
          <motion.p 
           whileInView={{opacity:1,y:0}}
           initial={{opacity:0,y:100}}
           transition={{duration:0.8}}
           className="text-xl para text-[#010D3E] tracking-tight mt-6 para">Welcome to Grudhra Solutions, your premier partner in innovative IT solutions, cutting-edge marketing services, and sustainable living. At Grudhra Solutions, we are dedicated to empowering businesses and individuals with technology and strategies that drive growth and success, while also promoting environmental responsibility.</motion.p>
          <div className="flex gap-1 items-center mt-[40px]  ">
            <motion.a
              whileInView={{opacity:1,y:0}}
              initial={{opacity:0,y:100}}
              transition={{duration:3.8}} 
              href="/contact" className="bg-black text-white px-4 py-2 rounded-lg font-medium inline-flex align-items justify-center">Contact Us</motion.a>
            <motion.a  whileInView={{opacity:1,y:0}}
              initial={{opacity:0,y:100}}
              transition={{duration:3.8}}

              href='/about'
              className='px-4 py-2 rounded-lg font-medium inline-flex align-items justify-center gap-2 cursor-pointer' >
              <span>Learn More</span>
              <FaArrowRight   className="h-5 w-8 m-1"/>
              </motion.a>
          </div>
        </div>
        <div className="mt-20 md:mt-0 md:h-[648px] md:flex-1  relative">
          <motion.img src={cogImage.src} alt="cog image" className="md:absolute  md:h-full md:w-auto md:max-w-none md-left-6 lg:left-0"
          animate={{
            translateY: [-20, 20],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: 'mirror',
            ease:'easeInOut'
          }}
          
          
          />
          <motion.img src={cylinderImage.src} alt="cylinder image" height={220} width={220} className="hidden md:block md -top-8 -left-32 md:absolute"
          animate={{
            translateY: [-30, 30],
          }}
          
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: 'mirror',
            ease:'easeInOut'
          }}
          
          
          
          />
        </div>
      </div>
      </div>
     
      
    </section>
  )
}

export default Herosection
