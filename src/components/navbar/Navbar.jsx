// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import React, { useState, useEffect } from "react";
// const CustomNavbar = () => {
//   const [img, setUserData] = useState();
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch(
//           "https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae"
//         );
//         if (!response.ok) {
//           throw new Error("Failed to fetch data");
//         }
//         const data = await response.json();
//         setUserData(data);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     };

//     fetchData();
//   }, []);

//   const location = usePathname();
//   const links = (
//     <ul className="text-white text-center text-sm w-40">
//       {/* <li
//         className={`${
//           location === "/"
//             ? "py-3 border-y-2 border-[#333333] border-r-orange-500 border-r-2 bg-[#333333] "
//             : ""
//         } py-3 border-y-2 border-[#333333] hover:border-r-white hover:border-r-2 hover:bg-[#333333]" `}
//       >
//         <Link href="/">Home</Link>
//       </li> */}
//       <li
//         className={`${
//           location === "#about"
//             ? "py-3 border-t border-[#333333] border-r-orange-500 border-r-2 bg-[#333333] "
//             : ""
//         } py-3 border-t border-[#333333] hover:border-r-white hover:border-r-2 hover:bg-[#333333]" `}
//       >
//         <Link href="/#about">About</Link>
//       </li>
//       <li
//         className={`${
//           location === "#timeline"
//             ? "py-3 border-y-2 border-[#333333] border-r-orange-500 border-r-2 bg-[#333333] "
//             : ""
//         } py-3 border-y-2 border-[#333333] hover:border-r-white hover:border-r-2 hover:bg-[#333333]" `}
//       >
//         <Link href="/#timeline">Resume</Link>
//       </li>
//       <li className="py-3 border-b-2 border-[#333333] hover:border-r-white hover:border-r-2 hover:bg-[#333333]">
//         <Link href="#service">Services</Link>
//       </li>
//       <li className="py-3 border-b-2 border-[#333333] hover:border-r-white hover:border-r-2 hover:bg-[#333333]">
//         <Link href="#skill">Skills</Link>
//       </li>
//       <li className="py-3 border-b-2 border-[#333333] hover:border-r-white hover:border-r-2 hover:bg-[#333333]">
//         <Link href="#projects">Projects</Link>
//       </li>

//       <li className="py-3 border-b-2 border-[#333333] hover:border-r-white hover:border-r-2 hover:bg-[#333333]">
//         <Link href="#testimonials">Testimonial</Link>
//       </li>
//       <li className="py-3 border-b-2 border-[#333333] hover:border-r-white hover:border-r-2 hover:bg-[#333333]">
//         <Link href="#contact">contact</Link>
//       </li>

//     </ul>
//   );
//   return (
//     <div className="hidden lg:block  h-screen sticky top-0 left-0 bg-[#222222] lg:w-40 py-5">
//       <div className="flex justify-center items-center ">
//         <Image
//           className=" h-20 w-20  object-cover  rounded-2xl"
//           height={500}
//           width={500}
//           src={img?.user?.about?.avatar?.url}
//           alt="image"
//         />
//       </div>
//       <h1 className="text-xl font-bold text-white text-center my-5">
//         {img?.user?.about?.name}
//       </h1>
//       <div className="flex flex-row   ">{links}</div>

//       {/* Social media icons */}
//       <div className="flex justify-center items-center gap-2 my-7">
//         {img?.user?.social_handles?.map((social) => (
//           <div
//             key={social?.platform}
//             className="cursor-pointer h-7 w-7 flex justify-center items-center bg-[#444444] hover:bg-blue-500 duration-500  transform-all"
//           >
//             <Image
//               className=" h-5 w-5   bg-cover rounded-2xl grayscale  "
//               height={500}
//               width={500}
//               src={social?.image?.url}
//               alt="social_icon"
//               // placeholder="blur"
//               // blurDataURL={social?.image?.url}
//             />
//           </div>
//         ))}
//       </div>
//       <h1 className="text-center text-white text-sm">
//         {" "}
//         © 2024 All rights <br />
//         reserved.
//       </h1>
//     </div>
//   );
// };

// export default CustomNavbar;

"use client";
import Image from "next/image";
import { usePathname } from "next/navigation";
import React, { useState, useEffect } from "react";

const sectionIds = {
  about: "about",
  timeline: "timeline",
  service: "service",
  skill: "skill",
  projects: "projects",
  testimonials: "testimonials",
  contact: "contact",
};

const CustomNavbar = () => {
  const [userData, setUserData] = useState();
  const [activeSection, setActiveSection] = useState();
  const location = usePathname();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setUserData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();

    // Add event listener for scroll
    window.addEventListener('scroll', handleScroll);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    handleScroll();
  }, [location]); // Re-run on location change

  const links = [
    { href: "about", label: "About" },
    { href: "timeline", label: "Resume" },
    { href: "service", label: "Services" },
    { href: "skill", label: "Skills" },
    { href: "projects", label: "Projects" },
    { href: "testimonials", label: "Testimonials" },
    { href: "contact", label: "Contact" },
  ];

  const getNavLinkClass = (sectionName) =>
    activeSection === sectionName
      ? "py-3  border-[#333333] border-r-orange-500 border-r-2 bg-[#333333] "
      : "py-3 border-y border-[#333333] hover:border-r-white hover:border-r-2 hover:bg-[#333333] ";

  const handleScroll = () => {
    const targetHeight = window.innerHeight / 2;
    for (const [section, id] of Object.entries(sectionIds)) {
      const sectionElement = document.getElementById(id);
      const rect = sectionElement?.getBoundingClientRect();
      if (
        rect?.top &&
        rect?.top <= targetHeight &&
        rect?.bottom &&
        rect?.bottom >= targetHeight
      ) {
        setActiveSection(section);
        break;
      }
    }
  };

  return (
    <div className="hidden lg:block h-screen sticky top-0 left-0 bg-[#222222] lg:w-40 py-5">
      <div className="flex justify-center items-center">
        <Image
          className="h-20 w-20 object-cover rounded-2xl"
          height={500}
          width={500}
          src={userData?.user?.about?.avatar?.url}
          alt="image"
        />
      </div>
      <h1 className="text-xl font-bold text-white text-center my-5">
        {userData?.user?.about?.name}
      </h1>
      <div className="text-white text-center text-sm w-40">
        {links.map(({ href, label }) => (
          <a
            href={
              location === "/"
                ? `#${sectionIds[href]}`
                : `/#${sectionIds[href]}`
            }
            key={label}
          >
            <div className={`${getNavLinkClass(href)} `}>{label}</div>
          </a>
        ))}
      </div>
      {/* Social media icons */}
      <div className="flex justify-center items-center gap-2 my-7">
        {userData?.user?.social_handles?.map((social, index) => (
          <div
            key={index}
            className="cursor-pointer h-7 w-7 flex justify-center items-center bg-[#444444] hover:bg-blue-500 duration-500 transform-all"
          >
            <Image
              className="h-5 w-5 bg-cover rounded-2xl grayscale"
              height={500}
              width={500}
              src={social?.image?.url}
              alt={`social_icon_${index}`}
            />
          </div>
        ))}
      </div>
      <h1 className="text-center text-white text-sm">
        {" "}
        © 2024 All rights <br />
        reserved.
      </h1>
    </div>
  );
};

export default CustomNavbar;

