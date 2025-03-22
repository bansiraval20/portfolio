"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const About = () => {
  return (
    <main className="bg-indigo-100 w-auto">
      <div className="">
      <div className="relative h-80 w-full">
        <Image
          src="https://rutvikdarji.vercel.app/_next/image?url=%2Fstatic%2Fimages%2Fdeveloper.jpg&w=1920&q=75"
          alt="Developer Image"
          layout="fill"
          objectFit="cover"
        />
</div>

      </div>
      <div className="w-auto flex justify-center md:flex md:justify-center absolute left-[34%] top-[51%] sm:absolute sm:left-[40.8%] sm:top-[49%] md:absolute md:left-[44.5%] md:top-[49%]">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="w-28 h-28 md:w-40 md:h-40 overflow-hidden rounded-full shadow-2xl shadow-slate-500 animate-bounceIn relative"
        >
          <Image
            src="/profile3.jpg"
            alt="Profile"
            fill
            className="object-cover w-full h-full"
          />
        </motion.div>
      </div>

      <div className="text-black mt-20 md:mt-28  px-4 animate-bounceIn flex flex-col justify-center items-center">
        <h1 className="text-2xl md:text-2xl font-bold">Bansi Raval</h1>
        <h2 className="mt-2 text-lg md:text-xl font-semibold">Web Designer</h2>
        <p className="mt-4 font- text-sm md:text-base text-center">
          I&apos;m Bansi Raval, a Computer Engineering diploma student at Sakalchand
          Patel University, excelling in frontend development and freelancing. I
          am committed to continuous learning, strengthening both frontend and
          backend skills for a well-rounded IT expertise.
        </p>
      </div>

      {/* Education Journy status */}

      <div className="mt-40  text-center animate-bounceIn">
        <h1 className="text-black font-bold text-2xl md:text-3xl">About Me</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6  px-4 py-28">
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
          <div className="bg-gray-900 text-white p-6 rounded-lg shadow-xl border border-gray-600">
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
          <div className="bg-gray-900 text-white p-6 rounded-lg shadow-xl border border-gray-600">
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
          <div className="col-span-1 md:col-span-2 bg-gray-900 text-white p-6 rounded-lg shadow-xl border border-gray-600">
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
    </main>
  );
};

export default About;
