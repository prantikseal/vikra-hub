"use client"
import React, { useState } from 'react';
import { Menu } from 'lucide-react';
import Logo from './Logo';

const NavBar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="w-full py-12 px-6 absolute z-10 h-48" style={{
        background: 'linear-gradient(180deg, #fdd8cb 0%, rgba(253, 216, 203, 0.7) 100%)',
      }}>
        <div className="container mx-auto flex justify-between items-center">
          <Logo />
          <div className="hidden md:flex space-x-6">
            <NavLink href="#home">Home</NavLink>
            <NavLink href="#weekly-cafe" className="">Weekly Cafe</NavLink>
            <NavLink href="#cognition">Cognition</NavLink>
            <NavLink href="#digital-store">Digital Store</NavLink>
            <NavLink href="#about-me">About Me</NavLink>
          </div>
          <div className="hidden md:block">
            <button className="bg-[#E18D67] text-white px-4 py-2 rounded-full hover:bg-[#d17c56] transition-colors duration-300">
              Sign Up
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
      </nav>

      {/* Mobile menu */}
      <div
        className={`${open ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          } absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden z-20`}
      >
        <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
          <div className="pt-5 pb-6 px-5">
            <div className="flex items-center justify-between">
              <Logo />
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
                <NavLink href="#home">Home</NavLink>
                <NavLink href="#weekly-cafe" className="text-blue-600">Weekly Cafe</NavLink>
                <NavLink href="#cognition">Cognition</NavLink>
                <NavLink href="#digital-store">Digital Store</NavLink>
                <NavLink href="#about-me">About Me</NavLink>
              </nav>
            </div>
          </div>
          <div className="py-6 px-5">
            <button className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-[#E18D67] hover:bg-[#d17c56]">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </>
  );
};


const NavLink = ({ href, children, className }) => (
  <a
    href={href}
    className={`text-gray-800 hover:text-gray-600 transition-colors duration-300 ${className || ''}`}
  >
    {children}
  </a>
);

export default NavBar;