"use client"

import About from "@/components/About";

import Footer from "@/components/Footer";
import Herosection from "@/components/Herosection";


import { Newsletter } from "@/components/Newsletter";
import Preloader from "@/components/Preloader";
import Services from "@/components/Services";
import { Simpleslider } from "@/components/Simpleslider";



import Vision from "@/components/Vision";
import Youtube from "@/components/Youtube";

import { AnimatePresence } from "framer-motion";

import { useEffect, useState } from "react";

 

  function Home() {

    const [isLoading, setIsLoading] = useState(true);

  useEffect( () => {
    (
      async () => {
          const LocomotiveScroll = (await import('locomotive-scroll')).default
          const locomotiveScroll = new LocomotiveScroll();

          setTimeout( () => {
            setIsLoading(false);
            document.body.style.cursor = 'default'
            window.scrollTo(0,0);
          }, 2000)
      }
    )()
  }, [])



    

    return (
    
    
      <main className="font-poppins min-h-screen bg-black[0.96] antialised bg-gray-300 dark:text-white scroll-smooth ">
        <AnimatePresence mode='wait'>
        {isLoading && <Preloader />}
      </AnimatePresence>
      
        <Herosection/>
        <About/>     
        <Services/>
        <Vision/> 
        {/* <Newsletter/> */}
        <Simpleslider/>
        <Youtube/>
       {/* <Testimonial/> */}
       
       
       <Footer/> 
      </main>
        
      
      
    );
  }

  export default Home;