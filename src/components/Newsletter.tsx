"use client";

import { motion } from "framer-motion";
import { PlaceholdersAndVanishInput } from "./ui/placeholders-and-vanish-input";
import React from "react";

export function Newsletter() {
  

  return (
    <motion.div 
    whileInView={{opacity:1,y:0}}
    initial={{opacity:0,y:100}}
    transition={{duration:0.8}}
    
    
    className="h-[40rem] flex flex-col justify-center  items-center px-4">
      
      <h2 className="heading-2 mb-20 max-sm:mb-20 lg:text-6xl text-center max-sm:text-5xl bg-clip-text text-transparent bg-gradient-to-b dark:from-neutral-50 to-neutral-400 from-neutral-500 to-neutral-900">
       Subscribe to the  Newsletter
      </h2>
      <p className=" para lg:mb-20 max-sm:mb-20 lg:text-xl sm:text-sm lg:px-60 sm:px-20 text-center  bg-clip-text text-transparent bg-gradient-to-b from-neutral-700 to-neutral-800">
        Subscribe to the newsletter to never miss any updates from Grudhra and co. about various topics of the world,technology and solutions.
      </p>
      <PlaceholdersAndVanishInput
        placeholders={[]}
        onChange={handleChange} 
        onSubmit={onSubmit}
      />
    </motion.div>
  ); 
}
