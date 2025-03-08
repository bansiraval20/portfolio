"use client";
import React from 'react'
import { motion } from "framer-motion";
import { once } from "events";

const Footer = () => {
  return (
    <footer className=" bg-slate-900 text-white py-8 text-center">
        <div className="border-t-2 pt-4 flex md:flex-row justify-evenly font-semibold">
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
          ><li>Home</li></motion.div>
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 300, 
              damping: 15,
              delay:0.2
            }}
          ><li>About</li></motion.div>  
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 300, 
              damping: 15,
              delay:0.3
            }}
          ><li>Projects</li></motion.div>  
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 300, 
              damping: 15,
              delay:0.4
            }}
          ><li>Certificates</li></motion.div>  
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
          ><li>Twitter</li></motion.div>
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 300, 
              damping: 15,
              delay:0.2
            }}
          ><li>LinkedIn</li></motion.div>  
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 300, 
              damping: 15,
              delay:0.3
            }}
          ><li>Facebook</li></motion.div>  
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 300, 
              damping: 15,
              delay:0.4
            }}
          ><li>Instagram</li></motion.div>
          </ul>
        </div>
      </footer>
  )
}

export default Footer