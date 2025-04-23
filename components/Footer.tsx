"use client";
import React from 'react'
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className=" bg-black text-gray-400 py-8 text-center">
        <div className="border-t-2 border-gray-400 pt-10 flex md:flex-row justify-evenly font-semibold">
          <ul className="space-y-3">
            <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 300, 
              damping: 15,
              delay:0.1
            }}
          ><li className='hover:text-white hover:cursor-pointer'>Home</li></motion.div>
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 300, 
              damping: 15,
              delay:0.2
            }}
          ><li className='hover:text-white hover:cursor-pointer'>About</li></motion.div>  
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 300, 
              damping: 15,
              delay:0.3
            }}
          ><li className='hover:text-white hover:cursor-pointer'>Projects</li></motion.div>  
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 300, 
              damping: 15,
              delay:0.4
            }}
          ><li className='hover:text-white hover:cursor-pointer'>Certificates</li></motion.div>  
          </ul>

          <ul className="space-y-3  md:mt-0">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 300, 
              damping: 15,
              delay:0.1
            }}
          ><li className='hover:text-white hover:cursor-pointer'>Twitter</li></motion.div>
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 300, 
              damping: 15,
              delay:0.2
            }}
          ><li className='hover:text-white hover:cursor-pointer'>LinkedIn</li></motion.div>  
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 300, 
              damping: 15,
              delay:0.3
            }}
          ><li className='hover:text-white hover:cursor-pointer'>Facebook</li></motion.div>  
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 300, 
              damping: 15,
              delay:0.4
            }}
          ><li className='hover:text-white hover:cursor-pointer'>Instagram</li></motion.div>
          </ul>
        </div>
      </footer>
  )
}

export default Footer