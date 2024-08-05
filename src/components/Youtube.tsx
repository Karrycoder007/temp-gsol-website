import { motion } from "framer-motion";
import React from "react";

const Youtube = () => {
  return (
    <div className="mt-20 mb-20">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 100 }}
        transition={{ duration: 0.8 }}
        className="flex justify-center items-center m-10 text-5xl heading-2"
      >
        Visit Our Channel
      </motion.h2>

      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 100 }}
        transition={{ duration: 0.8 }}
        className="flex lg:flex-row max-sm:flex-col justify-center items-center gap-10"
      >
        <iframe
          width="420"
          height="315"
          src="https://www.youtube.com/embed/_500RasLn_s?si=JuRWWOOn2853UVug"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin" // Corrected this attribute
          allowFullScreen
        ></iframe>
        <iframe
          width="420"
          height="315"
          src="https://www.youtube.com/embed/uYBDe-oXfyo?si=lpcIEOkDFJ8-yau4"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin" // Corrected this attribute
          allowFullScreen
        ></iframe>
      </motion.div>
    </div>
  );
};

export default Youtube;
