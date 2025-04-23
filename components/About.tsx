"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const About = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center font-serif text-white relative top-0"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1529788295308-1eace6f67388?w=2000&auto=format&fit=crop&q=80')",
        backgroundColor: "#000" // Fallback background color in case the image fails to load
      }}
    >

 

      <div className="w-auto flex justify-center md:flex md:justify-center left-[34%] sm:left-[40.8%] md:left-[44.5%] md:pt-16 ">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="w-28 h-28 md:w-48 md:h-48 overflow-hidden rounded-full shadow-lg shadow-slate-400 animate-bounceIn relative"
        >
          <Image
            src="/profile3.jpg"
            alt="Profile"
            fill
            className="object-cover w-full h-full"
          />
        </motion.div>
      </div>

      <div className="text-white pt-7 px-4 animate-bounceIn flex flex-col justify-center items-center drop-shadow-2xl">
        <h1 className="text-2xl md:text-3xl font-bold underline underline-offset-8 drop-shadow-lg text-white opacity-1">
          Bansi Raval
        </h1>

        <h2 className="mt-5 text-lg md:text-xl font-semibold text-white opacity-90">
          Front-End Developer
        </h2>

        <p className="mt-4 text-sm md:text-base text-center font-semibold text-white opacity-80 leading-relaxed max-w-3xl">
          I&apos;m Bansi Raval, a Computer Engineering diploma student at Sakalchand
          Patel University, excelling in frontend development and freelancing. I
          am committed to continuous learning, strengthening both frontend and
          backend skills for a well-rounded IT expertise.
        </p>
      </div>


      {/* Education Journy status */}

      <div className="mt-96 text-center animate-bounceIn">
        <h1 className="text-white underline underline-offset-8 font-bold text-2xl md:text-3xl">About Me</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-10 py-28">
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 15,
            delay: 0.1,
          }}
        >
          <div className="transition-transform duration-500 ease-in-out hover:scale-105 bg-gradient-to-r from-orange-300 via-orange-600-500 to-gray-400 text-black p-6 rounded-lg shadow-lg border border-gray-600 shadow-orange-400">
            <h2 className="font-semibold text-lg md:text-xl">
              2011-2021 (Standard 1 to 10)
            </h2>
            <p className="pt-4 text-sm md:text-base">
              This period marks the foundation of my educational journey,
              culminating in securing 83.33% in my 10th standard exams.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 15,
            delay: 0.2,
          }}
        >
          <div className="transition-transform duration-500 ease-in-out hover:scale-105 bg-gradient-to-r from-orange-300 via-orange-600-500 to-gray-400 text-black p-6 rounded-lg shadow-lg shadow-orange-400 border border-gray-600">
            <h2 className="font-semibold text-lg md:text-xl">
              2021-2024 (Diploma In Computer Engineering)
            </h2>
            <p className="pt-4 text-sm md:text-base">
              In 2021, my interest in computer technology led me to pursue a
              Diploma in Computer Technology, where I discovered a passion for
              web development.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 15,
            delay: 0.3,
          }}
        >
          <div className="transition-transform duration-500 ease-in-out hover:scale-105 col-span-1 md:col-span-2 bg-gradient-to-r from-orange-300 via-orange-600-500 to-gray-400 text-black p-6 rounded-lg shadow-lg shadow-orange-300 border border-gray-600 mb-72">
            <h2 className="font-semibold text-lg md:text-xl">
              2024-Present (B-Tech In Information Technology)
            </h2>
            <p className="pt-4 text-sm md:text-base">
              Proficient in frontend and backend development, skilled in modern
              web technologies including HTML, CSS, JavaScript, React, and
              backend frameworks.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
