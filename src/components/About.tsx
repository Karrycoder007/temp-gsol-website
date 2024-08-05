"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";

const About = () => {
  return (
    <motion.div
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 100 }}
      transition={{ duration: 0.8 }}
      className="  flex flex-col mt-20 mb-20 px-20 heading-2"
    >
      <h1 className="text-8xl font-semibold flex flex-start items-center mb-10 bg-clip-text text-transparent bg-gradient-to-b dark:from-neutral-50 to-neutral-400 from-neutral-500 to-neutral-900">
        Who Are We?
      </h1>

      <motion.p
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 100 }}
        transition={{ duration: 0.8 }}
        className="dark:text-white text-black lg:text-2xl md:text-xl sm:text-lg para"
      >
        Welcome to Grudhra Solutions, a dynamic startup agency dedicated to
        transforming businesses through innovative digital solutions. Since our
        inception in [2022], we have been committed to delivering excellence in
        social media marketing, digital advertising, and comprehensive web and
        app services. Our mission is to empower businesses of all sizes to
        achieve their fullest potential in the digital landscape by crafting
        bespoke strategies that drive growth, enhance brand visibility, and
        foster meaningful connections with target audiences. We offer tailored
        social media campaigns, optimized digital advertising, and stunning,
        responsive web design, alongside innovative mobile app development.
      </motion.p>

      <br />

      <motion.p
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 100 }}
        transition={{ duration: 0.8 }}
        className="dark:text-white text-black lg:text-2xl md:text-xl sm:text-lg para"
      >
        At Grudhra Solutions, we prioritize building lasting partnerships with
        our clients, delivering results-driven, data-backed strategies with a
        focus on innovation and expertise. Our team comprises seasoned
        professionals passionate about technology and creativity, staying ahead
        of industry trends to provide the most effective solutions. Whether
        you&apos;re a startup looking to make a mark or an established business
        aiming to expand your digital footprint, we are here to guide you every
        step of the way. Discover the power of strategic digital solutions with
        Grudhra Solutions – where your vision meets our expertise.
      </motion.p>

      <div className="mt-10 flex">
        <Link href={"/about"}>
          <button className="text-1.5xl text-gray-900 flex flex-col justify-center items-center ">
            Know More!
          </button>
        </Link>
      </div>
    </motion.div>
  );
};

export default About;
