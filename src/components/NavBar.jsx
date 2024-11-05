"use client"
import React, { useState } from 'react';
import { Menu } from 'lucide-react';
import Logo from './Logo';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

const NavBar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="w-full py-12 px-6 absolute z-10">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
          <div className="absolute -z-10 opacity-40" style={{
            background: 'linear-gradient(180deg, rgba(253,216,203,1) 0%, rgba(224,154,128,1) 50%, rgba(253,216,203,1) 100%)',
            top: `0`,
            left: `0`,
            width: `100%`,
            height: `-webkit-fill-available`
          }}>

          </div>
          <div className="container mx-auto flex justify-between items-center">
            {/* <Logo className="relative flex items-center justify-start scale-125" /> */}
            <Image src="/images/dopecontent-logo.png" width={500} height={200} alt="Vikra" className='w-40 h-30' />
            <div className="hidden md:flex space-x-14 pl-24">
              <NavLink className=" font-extrabold" href="#home">Home</NavLink>
              <NavLink className=" font-extrabold" href="https://docs.google.com/forms/d/e/1FAIpQLSc2ZdmkWiwNRSwo6nyRbwBu0Ii381iruGmoloi1tVPihN8BYg/viewform">Community</NavLink>
              <NavLink className=" font-extrabold" href="https://www.passionfroot.me/vikra">Advertise</NavLink>
              {/* <NavLink className=" font-extrabold" href="#digital-store">Digital Store</NavLink>
            <NavLink className=" font-extrabold" href="#about-me">About Me</NavLink> */}
            </div>
            <div className="hidden md:block">
              <button className="bg-[#DC724A] font-extrabold px-8 py-3 rounded-full hover:bg-[#ff9868] transition-colors duration-300 text-black border-black border shadow-[4px_8px_0_#000000]"
                // onClick={() => window.open('https://cognition.beehiiv.com/', '_blank')}
                // scroll to id called newsletter
                onClick={() => document.getElementById('newsletter').scrollIntoView({ behavior: 'smooth' })}
              >
                Subscribe Now
              </button>
            </div>
            <div className="md:hidden">
              <button
                type="button"
                className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#E18D67]"
                onClick={() => setOpen(!open)}
              >
                <span className="sr-only">Open menu</span>
                <Menu size={24} />
              </button>
            </div>
          </div>
        </motion.div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`${open ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          } absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden z-30`}
      >
        <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
          <div className="pt-5 pb-6 px-5">
            <div className="flex items-center justify-between">
              {/* <Logo /> */}
              <Image src="/images/dopecontent-logo.png" width={500} height={200} alt="Vikra" className='w-40 h-30' />
              <div className="-mr-2">
                <button
                  type="button"
                  className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500  focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#E18D67]"
                  onClick={() => setOpen(!open)}
                >
                  <span className="sr-only">Close menu</span>
                  <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div className="mt-6">
              <nav className="grid gap-y-8">
                {/* <NavLink className=" font-extrabold" href="#home">Home</NavLink>
                <NavLink className=" font-extrabold" href="#vikras-cafe">Newsletter</NavLink>
                <NavLink className=" font-extrabold" href="#cognition">Cognition</NavLink>
                <NavLink className=" font-extrabold" href="#digital-store">Digital Store</NavLink>
                <NavLink className=" font-extrabold" href="#about-me">About Me</NavLink> */}
                <NavLink className=" font-extrabold" href="#home">Home</NavLink>
                <NavLink className=" font-extrabold" href="https://docs.google.com/forms/d/e/1FAIpQLSc2ZdmkWiwNRSwo6nyRbwBu0Ii381iruGmoloi1tVPihN8BYg/viewform">Community</NavLink>
                <NavLink className=" font-extrabold" href="https://www.passionfroot.me/vikra">Advertise</NavLink>
              </nav>
            </div>
          </div>
          <div className="py-6 px-5">
            <button className="bg-[#DC724A] font-extrabold px-8 py-3 rounded-full hover:bg-[#ff9868] transition-colors duration-300 text-black border-black border shadow-[4px_8px_0_#000000] w-full"
              // onClick={() => window.open('https://cognition.beehiiv.com/', '_blank')}
              onClick={() => document.getElementById('newsletter').scrollIntoView({ behavior: 'smooth' })}
            >
              Subscribe Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
};


const NavLink = ({ href, children, className }) => (
  <Link
    href={href}
    className={`text-gray-800 hover:text-gray-600 transition-colors duration-300 ${className || ''}`}
    target='_blank'
  >
    {children}
  </Link>
);

export default NavBar;