"use client"
import React from 'react'
import { motion } from "framer-motion";

const p1 = () => {
  return (
    <main className=' h-screen'>
        <div className='h-full flex justify-around items-center'>
            <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 300, 
              damping: 15,
              delay:0.1
            }}
             className=' h-28 w-28 bg-red-600 border-2 border-black shadow-md shadow-gray-600'
             >
                1
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
            className=' h-28 w-28 bg-blue-600 border-2 border-black shadow-md shadow-gray-600'>2</motion.div>
            <motion.div 
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 300, 
              damping: 15,
              delay:0.3
            }}
            className=' h-28 w-28 bg-green-600 border-2 border-black shadow-md shadow-gray-600'>3</motion.div>
            <motion.div
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 300, 
              damping: 15,
              delay:0.4
            }}
            className=' h-28 w-28 bg-amber-600 border-2 border-black shadow-md shadow-gray-600'>4</motion.div>
            <motion.div 
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 300, 
              damping: 15,
              delay:0.5
            }}
            className=' h-28 w-28 bg-pink-600 border-2 border-black shadow-md shadow-gray-600'>5</motion.div>
        </div>
    </main>
  )
}

export default p1