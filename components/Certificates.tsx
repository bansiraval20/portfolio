"use client";
import { MoveRight } from 'lucide-react'
import React from 'react'
import { motion } from "framer-motion";

const Certificates = () => {
  return (
    <div
    className="min-h-screen bg-cover bg-center font-serif text-white relative top-0 flex flex-col justify-center items-center">

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
         <a href="/bansi-resume-main.pdf">
         <div className="transition-transform duration-500 ease-in-out hover:scale-105 hover:border-white border-2 border-gray-400 text-gray-400 hover:text-white px-3 md:w-[800px] md:h-12 w-[200px] h-12 flex items-center shadow-md shadow-slate-400 hover:shadow-lg hover:shadow-slate-400">
            <div className='bg-transparent font-bold text-lg '>Resume</div>
            <div className='md:ml-[660px] ml-[60px]'>
                <MoveRight className='w-8 h-8' />
            </div>
        </div></a>
        </motion.div>
    </div>
  )
}

export default Certificates