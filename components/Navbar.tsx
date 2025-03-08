import React from "react";
import Link from 'next/link';

const Navbar = () => {
  return (
    <header className="bg-slate-900 text-white shadow-md shadow-slate-400">
    <nav className="flex justify-between items-center px-6 md:px-12 h-16">
      {/* Logo */}
      <div className="font-semibold text-lg animate-bounceIn"><Link href={'/'}>Bansi Raval</Link></div>
  
      {/* Desktop Menu */}
      <ul className="hidden md:flex space-x-6 font-semibold">
        <li className="cursor-pointer hover:border-b-4 hover:rounded-md hover:border-gray-300 ">
          <Link href={'/'}>Home</Link>
        </li>
        <li className="cursor-pointer hover:border-b-4 hover:rounded-md hover:border-gray-300 ">
          <Link href={'/about'}>About</Link>
        </li>
        <li className="cursor-pointer hover:border-b-4 hover:rounded-md hover:border-gray-300">
          <Link href="/project">Project</Link>
        </li>
        <li className="cursor-pointer hover:border-b-4 hover:rounded-md hover:border-gray-300">
          <Link href={'/contact'}>Contact</Link>
        </li>
        <li className="cursor-pointer hover:border-b-4 hover:rounded-md hover:border-gray-300">
          <Link href={'/'}>Certificates</Link>
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
