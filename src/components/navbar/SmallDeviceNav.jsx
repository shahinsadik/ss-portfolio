"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState, useEffect } from "react";

const SmallDeviceNav = () => {
  const location = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const [img, setUserData] = useState();
  useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch('https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae');
          if (!response.ok) {
            throw new Error('Failed to fetch data');
          }
          const data = await response.json();
          setUserData(data);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
  
      fetchData();
    }, []); 



  const links = (
    <ul className="text-white text-sm ">
      <li className="py-3 border-y-2 border-[#333333] hover:border-r-white hover:border-r-2 hover:bg-[#333333]">
        <Link href="#about">About</Link>
      </li>
      <li className="py-3 border-b-2 border-[#333333] hover:border-r-white hover:border-r-2 hover:bg-[#333333]">
        <Link href="#service">Services</Link>
      </li>
      <li className="py-3 border-b-2 border-[#333333] hover:border-r-white hover:border-r-2 hover:bg-[#333333]">
        <Link href="#skill">Skills</Link>
      </li>
      <li className="py-3 border-b-2 border-[#333333] hover:border-r-white hover:border-r-2 hover:bg-[#333333]">
        <Link href="#projects">Projects</Link>
      </li>
      <li className="py-3 border-b-2 border-[#333333] hover:border-r-white hover:border-r-2 hover:bg-[#333333]">
        <Link href="#timeline">Timeline</Link>
      </li>
      <li className="py-3 border-b-2 border-[#333333] hover:border-r-white hover:border-r-2 hover:bg-[#333333]">
        <Link href="#testimonial">Testimonial</Link>
      </li>
      <li className="py-3 border-b-2 border-[#333333] hover:border-r-white hover:border-r-2 hover:bg-[#333333]">
        <Link href="#contact">Contact</Link>
      </li>
    </ul>
  );

  return (
    <div>
      <nav className="border-gray-200 fixed top-0 right-0 w-full lg:hidden  z-[99] shadow-xl bg-[#222222] dark:bg-gray-800 dark:border-gray-700">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a
            href="#"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <Image
          className=" h-12 w-12  object-cover  rounded-2xl"
          height={500}
          width={500}
          src={img?.user?.about?.avatar?.url}
          alt="image"
          // placeholder="blur"
          // blurDataURL={img?.user?.about?.avatar?.url}
        />
            <span className="text-white self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            {img?.user?.about?.name}
            </span>
          </a>
          <button
            onClick={toggleMenu}
            type="button"
            className="inline-flex items-center justify-center p-2 w-10 h-10 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-hamburger"
            aria-expanded={menuOpen ? "true" : "false"}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div
            className={`w-full h-screen ${menuOpen ? "" : "hidden"}`}
            id="navbar-hamburger"
          >
            {links}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default SmallDeviceNav;
