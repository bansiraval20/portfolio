"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";


const Homepage = () => {
  return (
    <main className="bg-indigo-100 min-h-screen">
      {/* Header */}
      {/* Hero Section */}
      <div className="flex flex-col md:flex-row-reverse items-center justify-evenly h-screen px-6 text-center md:text-left">
      {/* Profile Image (Smaller than Text Div) */}
      <div className="w-56 h-56 md:w-72 md:h-72 overflow-hidden shadow-md shadow-slate-600 rounded-full animate-bounceIn">
        <Image
          src="/profile2.jpg"
          alt="Profile"
          width={288} 
          height={288}
          className="object-cover w-full h-full"
        />
      </div>


      {/* Text Content (Bigger Width than Image) */}
      <div className="w-full md:w-2/3 lg:w-1/2 text-slate-900 px-6 md:px-12 mt-8 md:mt-0 flex flex-col items-center md:items-start">
        <h1 className="text-4xl font-bold animate-bounceIn">Hi,</h1>
        <h1 className="text-3xl font-bold animate-bounceIn">
          I&apos;m <span className="text-blue-600">Bansi</span>
        </h1>
        <h1 className="text-3xl font-bold animate-bounceIn">Web Designer</h1>

        <p className="mt-4 leading-relaxed">
          Passionate student and web developer, focused on crafting elegant,
          responsive web solutions. Leveraging academic insights and project
          experience to build user-friendly applications with the latest
          technologies.
        </p>

        {/* Contact Button */}
        <Link href="/contact">
          <button className="bg-blue-700 text-white px-6 py-2 mt-6 font-semibold rounded-md shadow-lg hover:bg-blue-800 transition animate-bounceIn">
            Contact
          </button>
        </Link>
      </div>
    </div>

      {/* Skills Section */}
      <h1 className="text-black text-center text-3xl font-bold pt-20">
        Versatile Programming Skills
      </h1>

      <div className="flex flex-wrap justify-center gap-4 px-4 pt-20">
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 300, 
            damping: 15,
            delay:0.1
          }}
        >
          <div className="bg-gray-900 text-white px-8 py-3 rounded-lg shadow-xl font-semibold">
            HTML5
          </div>
        </motion.div>
          
        <motion.div
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{
          type: "spring",
          stiffness: 300, 
          damping: 15,
          delay:0.2
        }}
        >
          <div className="bg-gray-900 text-white px-8 py-3 rounded-lg shadow-xl font-semibold">
            CSS3
          </div>
        </motion.div>
        <motion.div
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{
          type: "spring",
          stiffness: 300, 
          damping: 15,
          delay:0.3
        }}
        className="bg-gray-900 text-white px-8 py-3 rounded-lg shadow-xl font-semibold">
          TAILWIND
        </motion.div>
        <motion.div
         initial={{ y: 100, opacity: 0 }}
         whileInView={{ y: 0, opacity: 1 }}
         transition={{
           type: "spring",
           stiffness: 300, 
           damping: 15,
           delay:0.4
         }}
        className="bg-gray-900 text-white px-8 py-3 rounded-lg shadow-xl font-semibold">
          C
        </motion.div>
        <motion.div 
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{
          type: "spring",
          stiffness: 300, 
          damping: 15,
          delay:0.5
        }}
        className="bg-gray-900 text-white px-8 py-3 rounded-lg shadow-xl font-semibold">
          C++
        </motion.div>
        <motion.div 
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{
          type: "spring",
          stiffness: 300, 
          damping: 15,
          delay:0.6
        }}
        className="bg-gray-900 text-white px-8 py-3 rounded-lg shadow-xl font-semibold">
          PYTHON
        </motion.div>
      </div>

      {/* Education Section */}
      <h1 className="text-black text-center text-3xl font-bold pt-20">
        Educational Journey
      </h1>
      <div className="flex flex-wrap justify-center gap-8 px-4 pt-10">
        <motion.div
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{
          type: "spring",
          stiffness: 300, 
          damping: 15,
          delay:0.1
        }}
        className="bg-gray-900 text-white p-6 rounded-lg shadow-2xl w-full md:w-1/2 lg:w-1/3">
          <h2 className="font-semibold text-xl">Sakalchand Patel University</h2>
          <p className="pt-4">
            Currently pursuing a Computer Engineering diploma, honing skills in
            frontend development and emerging technologies.
          </p>
        </motion.div>
        <motion.div 
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{
          type: "spring",
          stiffness: 300, 
          damping: 15,
          delay:0.2   
        }}
        className="bg-gray-900 text-white p-6 rounded-lg shadow-2xl w-full md:w-1/2 lg:w-1/3">
          <h2 className="font-semibold text-xl">
            Shree H.P. High School Unava
          </h2>
          <p className="pt-4">
            Achieved a remarkable 83.33% in SSC, showcasing a commitment to
            academic excellence.
          </p>
        </motion.div>
      </div>

      {/* Contact Section */}
      <div className="max-w-4xl mx-auto px-4 pt-28 py-20">
        <h1 className="text-black text-3xl font-bold">Connect With Me</h1>
        <p className="font-semibold pt-2 text-black">
          Use this form to inquire about my services or just reach out!
        </p>
        <form className="space-y-6 mt-6">
          <input
            className="w-full p-3 border-2 border-gray-400 bg-indigo-100 shadow-lg text-black"
            type="text"
            placeholder="Your Name"
          />
          <input
            className="w-full p-3 border-2 border-gray-400 bg-indigo-100 shadow-lg text-black "
            type="email"
            placeholder="Your Email"
          />
          <textarea
            className="w-full p-3 border-2 border-gray-400 bg-indigo-100 shadow-lg text-black"
            placeholder="Your Message"
          ></textarea>
          <button className="w-full p-3 bg-blue-800 rounded-md text-white font-semibold shadow-lg hover:bg-blue-900">
            Submit
          </button>
        </form>
      </div>
    </main>
  );
};

export default Homepage