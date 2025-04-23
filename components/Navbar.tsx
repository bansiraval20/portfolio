import React from "react";
import Link from 'next/link';

const Navbar = () => {
  return (
    <header className="bg-black/70 text-white animate-fadeIn">
    <nav className="md:flex  px-6 md:px-14 h-16 justify-center shadow-md shadow-slate-400 hover:shadow-lg hover:shadow-slate-400">
  
      {/* Desktop Menu */}
      <ul className="hidden md:flex space-x-6 font-semibold gap-12 justify-center items-center">
        <li className="cursor-pointer transition-transform duration-400 ease-in-out hover:scale-110 opacity-60 hover:opacity-100 hover:underline hover:underline-offset-8">
          <Link href={'/'}>Home</Link>
        </li>
        <li className="cursor-pointer transition-transform duration-400 ease-in-out hover:scale-110 opacity-60 hover:opacity-100 hover:underline hover:underline-offset-8">
          <Link href={'/about'}>About</Link>
        </li>
        <li className="cursor-pointer transition-transform duration-400 ease-in-out hover:scale-110 opacity-60 hover:opacity-100 hover:underline hover:underline-offset-8">
          <Link href="/project">Project</Link>
        </li>
        <li className="cursor-pointer transition-transform duration-400 ease-in-out hover:scale-110 opacity-60 hover:opacity-100 hover:underline hover:underline-offset-8">
          <Link href={'/contact'}>Contact</Link>
        </li>
        <li className="cursor-pointer  transition-transform duration-400 ease-in-out hover:scale-110 opacity-60 hover:opacity-100 hover:underline hover:underline-offset-8">
          <Link href={'/certificates'}>Certificates</Link>
        </li>
      </ul>
  
      {/* Mobile Menu Button */}
      <input type="checkbox" id="menu-toggle" className="hidden peer" />
      <label htmlFor="menu-toggle" className="md:hidden cursor-pointer p-2">
        ☰
      </label>
  
    </nav>    
  </header>
  
  );
};

export default Navbar;
