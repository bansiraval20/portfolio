"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { Facebook, Instagram, Linkedin } from 'lucide-react';




const Homepage = () => {
  return (
    <main
    className="min-h-screen bg-cover bg-center font-serif text-white relative bg-black/60 animate-fadeIn"
    style={{
      backgroundImage: "url('https://images.unsplash.com/photo-1741945939193-0293c3c9e87f?w=1920&auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMDN8fHxlbnwwfHx8fHw%3D')"
    }}
  >
      {/* Header */}
      {/* Hero Section */}
      <div className="flex flex-col md:flex-row-reverse items-center justify-evenly h-screen px-6 text-center md:text-left">
        <div className="relative w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-72 lg:h-72 mb-6 md:mb-0">

      {/* Spinning shadow ring behind */}
      <div className="absolute -inset-[2px] w-[292px] h-[292px] rounded-full bg-gradient-to-r from-lime-300 via-green-400 to-emerald-300 blur-lg opacity-60 animate-spin"></div>

      {/* Profile Image on top */}
      <div className="relative w-full h-full overflow-hidden rounded-full shadow-lg z-10">
        <Image
          src="/profile2.jpg"
          alt="Profile"
          width={288}
          height={288}
          className="object-cover w-full h-full rounded-full"
        />
      </div>
    </div>

      


      {/* Text Content (Bigger Width than Image) */}
      <div className="w-full md:w-2/3 lg:w-1/2 text-indigo-100 px-6 md:px-12 mt-8 md:mt-0 flex flex-col items-center md:items-start">
        <h1 className="text-4xl font-bold animate-bounceIn animate-">Hi,</h1>
        <h1 className="text-3xl font-bold animate-bounceIn">
          I&apos;<span  className="text-emerald-400  relative">m Bansi</span>
        </h1>
        <h1 className="text-3xl font-bold animate-bounceIn">Web Designer</h1>
        <div className="">
          <p className="mt-4 leading-relaxed font-semibold text-zinc-200 drop-shadow-xl">
            Passionate student and web developer, focused on crafting elegant,
            responsive web solutions. Leveraging academic insights and project
            experience to build user-friendly applications with the latest
            technologies.</p>
        </div>

        {/* Icons */}
        <div className="flex gap-4 justify-center sm:justify-start w-full items-center mt-2">
          <div className="transition-transform duration-400 ease-in-out hover:scale-110">
            <a href="https://www.linkedin.com/in/banshi-raval/">
              <Linkedin className="hover:text-green-500 w-6 sm:w-5" />
            </a>
          </div>
          <div className="transition-transform duration-400 ease-in-out hover:scale-110">
            <a href="https://www.instagram.com/bansi_6419/">
              <Instagram className="hover:text-green-500 w-6 sm:w-5" />
            </a>
          </div>
          <div className="transition-transform duration-400 ease-in-out hover:scale-110">
            <a href="https://www.facebook.com/bansi.6419">
              <Facebook className="hover:text-green-500 w-6 sm:w-5" />
            </a>
          </div>
          <div className="transition-transform duration-400 ease-in-out hover:scale-110">
            <a href="https://github.com/bansiraval20">
              <svg className="feather feather-github w-6 sm:w-5 hover:text-green-500" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>
            </a>
          </div>
        </div>
          
        
        {/* Contact Button */}
        <Link href="/contact">
          <button className="transition-transform duration-500 ease-in-out hover:scale-110 bg-gradient-to-r from-green-400 via-emerald-500 to-green-600 text-black px-8 py-2 mt-4 font-semibold rounded-md shadow-lg shadow-green-900 hover:shadow-xl hover:shadow-green-700 animate-bounceIn">
            Contact
          </button>
        </Link>
      </div>
    </div>

      {/* Skills Section */}
      <div className=" flex flex-wrap flex-col justify-center gap-4 px-4 mt-20">
        <h1 className="text-white text-center text-3xl font-bold pt-36 underline underline-offset-8">
          Versatile Programming Skills
        </h1>
        <h1 className="text-center mt-6 text-lg font-bold opacity-90">
        Fluent in multiple programming languages...
        </h1>

        <div className="flex flex-wrap justify-center gap-4 px-4 pt-8">
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
            <div className="transition-transform duration-400 ease-in-out hover:scale-105 flex justify-center items-center gap-1 bg-gradient-to-r from-green-400 via-emerald-500 to-green-600 text-black px-8 py-3 rounded-lg shadow-xl font-bold shadow-green-800">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 128 128"
              className="w-7 h-9 text-black fill-current"
            >
              <path d="M19.5 0h89l-8.2 110.6L63.8 128 27.5 110.6 19.5 0zm72.1 38.5l1.3-14.6H35.1l3.3 37.3h47.2l-1.6 18.2-15.9 4.4-15.9-4.4-1-11.1h-13l1.8 21.3L63.8 102l26.4-7.4 3.5-39.7H45.7l-1-11.4h47.9z" />
            </svg>            
              HTML
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
            <div className="transition-transform duration-400 ease-in-out hover:scale-105 flex justify-center items-center gap-1 bg-gradient-to-r from-green-400 via-emerald-500 to-green-600 text-black px-8 py-3 rounded-lg shadow-xl font-semibold  shadow-green-800">
            <svg className="w-9 h-9" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><g id="CSS3"><path d="M32.34,6,30.1,31.2,20,34,9.9,31.2,7.66,6ZM13.22,22l.43,4.86L20,28.65h0l6.33-1.75,1.4-15.75H12.25l.28,3.09H24.34l-.28,3.17H12.81l.27,3.09H23.8l-.36,4L20,25.44h0l-3.45-.93L16.32,22Z"/></g></svg>
              CSS
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
          }}>
            <div className="transition-transform duration-400 ease-in-out hover:scale-105 flex justify-center items-center gap-2 bg-gradient-to-r from-green-400 via-emerald-500 to-green-600 text-black px-8 py-3 rounded-lg shadow-xl font-semibold shadow-green-800">
         
          
            <svg className="w-8 h-8" viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg"><path d="M18.5 9.51a4.22 4.22 0 0 1-1.91-1.34A5.77 5.77 0 0 0 12 6a4.72 4.72 0 0 0-5 4 3.23 3.23 0 0 1 3.5-1.49 4.32 4.32 0 0 1 1.91 1.35A5.77 5.77 0 0 0 17 12a4.72 4.72 0 0 0 5-4 3.2 3.2 0 0 1-3.5 1.51zm-13 4.98a4.22 4.22 0 0 1 1.91 1.34A5.77 5.77 0 0 0 12 18a4.72 4.72 0 0 0 5-4 3.23 3.23 0 0 1-3.5 1.49 4.32 4.32 0 0 1-1.91-1.35A5.8 5.8 0 0 0 7 12a4.72 4.72 0 0 0-5 4 3.2 3.2 0 0 1 3.5-1.51z"/></svg>
            <svg  viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M0 32v448h448V32H0zm243.8 349.4c0 43.6-25.6 63.5-62.9 63.5-33.7 0-53.2-17.4-63.2-38.5l34.3-20.7c6.6 11.7 12.6 21.6 27.1 21.6 13.8 0 22.6-5.4 22.6-26.5V237.7h42.1v143.7zm99.6 63.5c-39.1 0-64.4-18.6-76.7-43l34.3-19.8c9 14.7 20.8 25.6 41.5 25.6 17.4 0 28.6-8.7 28.6-20.8 0-14.4-11.4-19.5-30.7-28l-10.5-4.5c-30.4-12.9-50.5-29.2-50.5-63.5 0-31.6 24.1-55.6 61.6-55.6 26.8 0 46 9.3 59.8 33.7L368 290c-7.2-12.9-15-18-27.1-18-12.3 0-20.1 7.8-20.1 18 0 12.6 7.8 17.7 25.9 25.6l10.5 4.5c35.8 15.3 55.9 31 55.9 66.2 0 37.8-29.8 58.6-69.7 58.6z"/></svg>
            JAVASCRIPT 
            </div>
          </motion.div>

          <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 300, 
            damping: 15,
            delay:0.4
          }}>
          <div
          className="transition-transform duration-400 ease-in-out hover:scale-105 flex justify-center items-center gap-1 bg-gradient-to-r from-green-400 via-emerald-500 to-green-600 text-black px-8 py-3 rounded-lg shadow-xl font-semibold shadow-green-800">
            <svg className="w-9 h-9" viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg"><path d="M18.5 9.51a4.22 4.22 0 0 1-1.91-1.34A5.77 5.77 0 0 0 12 6a4.72 4.72 0 0 0-5 4 3.23 3.23 0 0 1 3.5-1.49 4.32 4.32 0 0 1 1.91 1.35A5.77 5.77 0 0 0 17 12a4.72 4.72 0 0 0 5-4 3.2 3.2 0 0 1-3.5 1.51zm-13 4.98a4.22 4.22 0 0 1 1.91 1.34A5.77 5.77 0 0 0 12 18a4.72 4.72 0 0 0 5-4 3.23 3.23 0 0 1-3.5 1.49 4.32 4.32 0 0 1-1.91-1.35A5.8 5.8 0 0 0 7 12a4.72 4.72 0 0 0-5 4 3.2 3.2 0 0 1 3.5-1.51z"/></svg>
            TAILWIND
            </div>
          </motion.div>
          <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 300, 
            damping: 15,
            delay:0.5
          }}>
          <div
          className="transition-transform duration-400 ease-in-out hover:scale-105 flex justify-center items-center gap-1 bg-gradient-to-r from-green-400 via-emerald-500 to-green-600 text-black px-8 py-3 rounded-lg shadow-xl font-semibold shadow-green-800">
         <svg className="w-8 h-8" viewBox="0 0 384 512" xmlns="http://www.w3.org/2000/svg"><path d="M352 359.8c22.46 0 31.1 19.53 31.1 31.99c0 23.14-66.96 88.23-164.5 88.23c-137.1 0-219.4-117.8-219.4-224c0-103.8 79.87-223.1 219.4-223.1c99.47 0 164.5 66.12 164.5 88.23c0 12.27-9.527 32.01-32.01 32.01c-31.32 0-45.8-56.25-132.5-56.25c-97.99 0-155.4 84.59-155.4 159.1c0 74.03 56.42 160 155.4 160C306.5 416 320.5 359.8 352 359.8z"/></svg>
            C
          </div>
          </motion.div>
          <motion.div 
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 300, 
            damping: 15,
            delay:0.6
          }}>
          <div
          className="transition-transform duration-400 ease-in-out hover:scale-105 flex justify-center items-center gap-1 bg-gradient-to-r from-green-400 via-emerald-500 to-green-600 text-black px-8 py-3 rounded-lg shadow-xl font-semibold  shadow-green-800">
         <svg className="w-9 h-9" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20.66 7a1.51 1.51 0 0 0-.55-.57l-7.34-4.24a1.67 1.67 0 0 0-1.54 0L3.89 6.43a1.68 1.68 0 0 0-.77 1.33v8.48a1.57 1.57 0 0 0 .22.76 1.51 1.51 0 0 0 .55.57l7.34 4.24a1.67 1.67 0 0 0 1.54 0l7.34-4.24a1.51 1.51 0 0 0 .55-.57 1.57 1.57 0 0 0 .22-.76V7.76a1.57 1.57 0 0 0-.22-.76zM12 17.92A5.92 5.92 0 1 1 17.13 9L16 9.71l-.36.2-1 .61A3 3 0 0 0 9 12a2.88 2.88 0 0 0 .4 1.48 3 3 0 0 0 5.13 0l2.6 1.52A5.94 5.94 0 0 1 12 17.92zm5.92-5.59h-.66V13h-.65v-.66H16v-.66h.66V11h.65v.66h.66zm2.47 0h-.66V13h-.66v-.66h-.65v-.66h.65V11h.66v.66h.66z"/></svg>
            C++
          </div>
          </motion.div>
          <motion.div 
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 300, 
            damping: 15,
            delay:0.7
          }}>
          <div
          className="transition-transform duration-500 ease-in-out hover:scale-105   flex justify-center items-center gap-1 bg-gradient-to-r from-green-400 via-emerald-500 to-green-600 text-black px-8 py-3 rounded-lg font-semibold shadow-lg shadow-green-800">
         <svg className="w-9 h-9" height="512" viewBox="0 0 512 512" width="512" xmlns="http://www.w3.org/2000/svg"><title/><path d="M314,36.38c-18.59-3.06-45.8-4.47-64.27-4.38a311.09,311.09,0,0,0-51.66,4.38c-45.74,8-54.07,24.7-54.07,55.54V128H256v16H107.62C66.06,144,32.33,193.67,32,255.12c0,.29,0,.58,0,.88a162.91,162.91,0,0,0,3.13,32c9.29,46.28,38.23,80,72.49,80H128V314c0-31.3,20.84-59.95,55-66.1l9.87-1.23H314a56.05,56.05,0,0,0,15.06-2A52.48,52.48,0,0,0,368,193.68V91.92C368,63,343.32,41.19,314,36.38ZM194.93,105.5a20.37,20.37,0,1,1,20.3-20.3A20.29,20.29,0,0,1,194.93,105.5Z"/><path d="M475.28,217c-10.7-42.61-38.41-73-70.9-73H386.67v47.45c0,39.57-26,68.22-57.74,73.13a63.54,63.54,0,0,1-9.69.75H198.08a60,60,0,0,0-15.23,1.95C160.54,273.14,144,291.7,144,315.77V417.54c0,29,29.14,46,57.73,54.31,34.21,9.95,71.48,11.75,112.42,0,27.19-7.77,53.85-23.48,53.85-54.31V384H256V368H404.38c29.44,0,54.95-24.93,67.45-61.31A156.83,156.83,0,0,0,480,256,160.64,160.64,0,0,0,475.28,217ZM316.51,404a20.37,20.37,0,1,1-20.3,20.3A20.29,20.29,0,0,1,316.51,404Z"/></svg>
            PYTHON
          </div>
          </motion.div>
      </div>
    </div>

      {/* Education Section */}
      <h1 className="text-white text-center text-3xl font-bold pt-96 underline underline-offset-8">
        Educational Journey
      </h1>
      <div className=" flex flex-wrap justify-center gap-8 px-4 pt-24">
        <motion.div
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{
          type: "spring",
          stiffness: 300, 
          damping: 15,
          delay:0.1
        }}
        className="bg-gradient-to-r from-green-400 via-emerald-500 to-green-600 text-black p-6 rounded-lg shadow-xl w-full md:w-1/2 lg:w-1/3  shadow-green-800">
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
        className=" text-black p-6 rounded-lg  w-full md:w-1/2 lg:w-1/3 shadow-xl bg-gradient-to-r from-green-400 via-emerald-500 to-green-600 shadow-green-800">
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
      <div className="max-w-4xl mx-auto px-4 pt-96 py-44">
        <h1 className="text-white text-3xl font-bold">Connect With Me</h1>
        <p className="font-semibold pt-4 text-white">
          Use this form to inquire about my services or just reach out!
        </p>
        <form className="space-y-6 mt-9">
          <input
            className="w-full p-3 border-b-2 border-white bg-indigo-100 shadow-lg text-white bg-transparent outline-none"
            type="text"
            placeholder="Your Name"
          />
          <input
            className="w-full p-3 border-b-2 border-white bg-indigo-100 shadow-lg text-white bg-transparent outline-none"
            type="email"
            placeholder="Your Email"
          />
          <textarea
            className="w-full p-3 border-b-2 border-white bg-indigo-100 shadow-lg text-white bg-transparent outline-none"
            placeholder="Feedback"
          ></textarea>
          <button className="transition-transform duration-400 ease-in-out hover:scale-105 w-full p-3 bg-gradient-to-r from-orange-500 via-red-500 to-yellow-500 rounded-md text-white font-semibold shadow-md shadow-yellow-400 hover:shadow-lg hover:shadow-yellow-500">
            Submit
          </button>
        </form>
      </div>
    </main>
  );
};


export default Homepage