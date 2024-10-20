// import React from 'react'
// menubar ko import yaha kia hai
import { MdOutlineMenu } from "react-icons/md"; /* icon ko import yahan pr kia hai */

import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-blue-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-xl">Taj</div>

        {/* yaha pr ham ne hideen property use ki jo k agr screen siz medium se kam hoga 
        tw navbar me se component hide hojyngy */}
        <ul className=" space-x-4 'gap-4 lg:gap-4 hidden md:flex ml-auto">
          <li>
            <Link href="/" className="text-white hover:text-gray-300">
              Home
            </Link>
          </li>

          <li>
            <Link href="/about" className="text-white hover:text-gray-300">
              About
            </Link>
            &nbsp;
          </li>
          <li>
            <Link href="/contact" className="text-white hover:text-gray-300">
              Contact
            </Link>
          </li>
          
          <li>
            <Link href="/projects" className="text-white hover:text-gray-300">
              Project
            </Link>
          </li>

          <li>
            <Link href="/team" className="text-white hover:text-gray-300">
              Team
            </Link>
          </li>
        </ul>
        {
        <Link href="./" className="text-white hover:text-gray-300">
            <MdOutlineMenu className="text-3xl md:hidden" size={30} />
        </Link> }
      </div>
    </nav>
  );
};

export default Navbar;
