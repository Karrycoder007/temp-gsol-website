"use client";

import Footer from "@/components/Footer";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaPython,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiPrisma,
  SiMongodb,
  SiFirebase,
  SiRedis,
  SiExpress,
  SiPostgresql,
  SiMysql,
  SiPython,
  SiAngular,
} from "react-icons/si";
import React from "react";
import { motion } from "framer-motion";

const page = () => {
  return (
    <motion.div className="container mx-auto  bg-gray-300">
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 100 }}
        transition={{ duration: 0.8 }}
        className="px-10 py-20 text-center"
      >
        <h2 className="text-7xl font-semibold text-gray-700 mb-10">
          Why Choose Grudhra Solutions?
        </h2>
        <p className="text-xl text-gray-600 mb-8 para px-20">
          At Grudhra Solutions, our mission is to empower your business through
          innovative and reliable digital solutions. Here&apos;s why clients
          trust us:
        </p>
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 100 }}
          transition={{ duration: 1 }}
          className="flex flex-wrap justify-center items-center gap-10"
        >
          <div className="max-w-sm bg-slate-500 shadow-md rounded-lg p-5 ">
            <img
              src="https://images.unsplash.com/photo-1522071901873-411886a10004?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Expert Team"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-2xl font-semibold text-gray-100 mb-2 heading-2">
              Expert Team
            </h3>
            <p className="text-white para">
              Our team of experienced developers, designers, and project
              managers work together to deliver top-notch solutions tailored to
              your needs.
            </p>
          </div>
          <div className="max-w-sm bg-slate-500 shadow-md rounded-lg p-5">
            <img
              src="https://plus.unsplash.com/premium_photo-1663040543387-cb7c78c4f012?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Cutting-Edge Technology"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-2xl font-semibold text-gray-100 mb-2 heading-2">
              Cutting-Edge Technology
            </h3>
            <p className="text-white para">
              We use the latest tools and technologies to build scalable,
              efficient, and secure applications that keep you ahead of the
              competition.
            </p>
          </div>
          <div className="max-w-sm bg-slate-500 shadow-md rounded-lg p-5">
            <img
              src="https://plus.unsplash.com/premium_photo-1661484821938-c9f8b585bd21?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Customer Support"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-2xl font-semibold text-gray-100 mb-2 heading-2">
              Unmatched Support
            </h3>
            <p className="text-white para">
              Our dedicated support team is always ready and prepared to assist
              you, ensuring your projects run smoothly and efficiently with
              trust.
            </p>
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 100 }}
        transition={{ duration: 0.8 }}
        className="mt-10 px-10 flex flex-col lg:flex-row justify-center items-center gap-10"
      >
        <img
          src="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
          alt="Web Development"
          className="bg-black opacity-90 lg:h-3/5 w-4/5 lg:w-2/5 hover:shadow-md hover:scale-105 ease-in-out"
        />
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 100 }}
          transition={{ duration: 1 }}
          className="text-center lg:text-left lg:w-2/5"
        >
          <h2 className="text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-b from-gray-500 to-gray-800 mb-4 heading-2">
            Crafting Cutting-Edge Digital Experiences
          </h2>
          <p className="text-xl text-gray-600 mb-4 para">
            At Grudhra Solutions, we specialize in creating innovative web and
            app solutions tailored to your business needs. Our team of experts
            leverages the latest technologies to build scalable, efficient, and
            user-friendly applications that drive engagement and growth.
          </p>
          <p className="text-xl text-gray-600 mb-4 para">
            From concept to deployment, Grudhra Solutions is your partner in
            digital innovation. We offer comprehensive services including
            responsive web design, custom app development, and robust backend
            solutions to ensure your online presence is powerful and effective.
          </p>
        </motion.div>
      </motion.div>

      <div className="px-10 mt-20 bg-gray-300">
        <h2 className="text-5xl font-semibold text-gray-700 text-center mb-14 heading-2">
          Technology we work with
        </h2>
        <div className="flex flex-wrap justify-center items-center gap-8 mb-20">
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 100 }}
            transition={{ duration: 0.8 }}
            className="text-center p-3 bg-white shadow-md rounded-lg w-40 h-w-40 flex flex-col justify-center items-center"
          >
            <FaHtml5 className="text-6xl text-orange-600" />
            <p className="mt-2 text-xl text-gray-700">HTML5</p>
          </motion.div>
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 100 }}
            transition={{ duration: 0.8 }}
            className="text-center p-3 bg-white shadow-md rounded-lg w-40 h-w-40 flex flex-col justify-center items-center"
          >
            <FaCss3Alt className="text-6xl text-blue-600" />
            <p className="mt-2 text-xl text-gray-700">CSS3</p>
          </motion.div>
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 100 }}
            transition={{ duration: 0.8 }}
            className="text-center p-3 bg-white shadow-md rounded-lg w-40 h-w-40 flex flex-col justify-center items-center"
          >
            <FaJs className="text-6xl text-yellow-500" />
            <p className="mt-2 text-xl text-gray-700">JavaScript</p>
          </motion.div>
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 100 }}
            transition={{ duration: 0.8 }}
            className="text-center p-3 bg-white shadow-md rounded-lg w-40 h-w-40 flex flex-col justify-center items-center"
          >
            <FaReact className="text-6xl text-blue-500" />
            <p className="mt-2 text-xl text-gray-700">React</p>
          </motion.div>
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 100 }}
            transition={{ duration: 0.8 }}
            className="text-center p-3 bg-white shadow-md rounded-lg w-40 h-w-40 flex flex-col justify-center items-center"
          >
            <SiNextdotjs className="text-6xl text-gray-700" />
            <p className="mt-2 text-xl text-gray-700">Next.js</p>
          </motion.div>
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 100 }}
            transition={{ duration: 0.8 }}
            className="text-center p-3 bg-white shadow-md rounded-lg w-40 h-w-40 flex flex-col justify-center items-center"
          >
            <SiPrisma className="text-6xl text-gray-700" />
            <p className="mt-2 text-xl text-gray-700">Prisma</p>
          </motion.div>
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 100 }}
            transition={{ duration: 0.8 }}
            className="text-center p-3 bg-white shadow-md rounded-lg w-40 h-w-40 flex flex-col justify-center items-center"
          >
            <SiMongodb className="text-6xl text-green-600" />
            <p className="mt-2 text-xl text-gray-700">MongoDB</p>
          </motion.div>
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 100 }}
            transition={{ duration: 1 }}
            className="text-center p-3 bg-white shadow-md rounded-lg w-40 h-w-40 flex flex-col justify-center items-center"
          >
            <SiFirebase className="text-6xl text-yellow-500" />
            <p className="mt-2 text-xl text-gray-700">Firebase</p>
          </motion.div>
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 100 }}
            transition={{ duration: 1 }}
            className="text-center p-3 bg-white shadow-md rounded-lg w-40 h-w-40 flex flex-col justify-center items-center"
          >
            <SiRedis className="text-6xl text-red-600" />
            <p className="mt-2 text-xl text-gray-700">Redis</p>
          </motion.div>
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 100 }}
            transition={{ duration: 1 }}
            className="text-center p-3 bg-white shadow-md rounded-lg w-40 h-w-40 flex flex-col justify-center items-center"
          >
            <SiExpress className="text-6xl text-gray-700" />
            <p className="mt-2 text-xl text-gray-700">Express.js</p>
          </motion.div>
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 100 }}
            transition={{ duration: 1 }}
            className="text-center p-3 bg-white shadow-md rounded-lg w-40 h-w-40 flex flex-col justify-center items-center"
          >
            <SiPostgresql className="text-6xl text-blue-700" />
            <p className="mt-2 text-xl text-gray-700">PostgreSQL</p>
          </motion.div>
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 100 }}
            transition={{ duration: 1 }}
            className="text-center p-3 bg-white shadow-md rounded-lg w-40 h-w-40 flex flex-col justify-center items-center"
          >
            <SiMysql className="text-6xl text-gray-700" />
            <p className="mt-2 text-xl text-gray-700">MySQL</p>
          </motion.div>
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 100 }}
            transition={{ duration: 1 }}
            className="text-center p-3 bg-white shadow-md rounded-lg w-40 h-w-40 flex flex-col justify-center items-center"
          >
            <SiPython className="text-6xl text-gray-700" />
            <p className="mt-2 text-xl text-gray-700">Python</p>
          </motion.div>
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 100 }}
            transition={{ duration: 1 }}
            className="text-center p-3 bg-white shadow-md rounded-lg w-40 h-w-40 flex flex-col justify-center items-center"
          >
            <SiAngular className="text-6xl text-red-700" />
            <p className="mt-2 text-xl text-gray-700">Angular</p>
          </motion.div>
        </div>
      </div>

      {/* <div className="px-10 mt-20 bg-gray-300">
        
        <div className="flex justify-center items-center gap-10">
          
          <iframe width="560" height="315" src="https://www.youtube.com/embed/lMGabOEaQjY?si=drkkaNbI2TUDGl1w" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/gTWEBzdCPKw?si=KGJfi0KzOJDlqqC5" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
      </div> */}

      <Footer />
    </motion.div>
  );
};

export default page;
