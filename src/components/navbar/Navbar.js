import getAllData from "@/lib/allData";
import Image from "next/image";
import Link from "next/link";

const CustomNavbar = async () => {
  const img = await getAllData();
  const links = (
    <ul className="text-white text-center text-sm w-40">
      <li className="py-3 border-y-2 border-[#333333] hover:border-r-white hover:border-r-2 hover:bg-[#333333]">
        <Link href="#about">About</Link>
      </li>
      <li className="py-3 border-b-2 border-[#333333] hover:border-r-white hover:border-r-2 hover:bg-[#333333]">
        <Link href="#timeline">Resume</Link>
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
        <Link href="#testimonials">Testimonial</Link>
      </li>
      <li className="py-3 border-b-2 border-[#333333] hover:border-r-white hover:border-r-2 hover:bg-[#333333]">
        <Link href="#contact">Contact</Link>
      </li>
    </ul>
  );
  return (
    <div className="hidden lg:block  h-screen sticky top-0 left-0 bg-[#222222] lg:w-40 py-5">
      <div className="flex justify-center items-center ">
        <Image
          className=" h-20 w-20  object-cover  rounded-2xl"
          height={500}
          width={500}
          src={img?.user?.about?.avatar?.url}
          alt="image"
        />
      </div>
      <h1 className="text-xl font-bold text-white text-center my-5">
        {img?.user?.about?.name}
      </h1>
      <div className="flex flex-row   ">{links}</div>

      {/* Social media icons */}
      <div className="flex justify-center items-center gap-2 my-7">
        {img?.user?.social_handles?.map((social) => (
          <div
            key={social?.platform}
            className="cursor-pointer h-7 w-7 flex justify-center items-center bg-[#444444] hover:bg-blue-500 duration-500  transform-all"
          >
            <Image
              className=" h-5 w-5   bg-cover rounded-2xl grayscale  "
              height={500}
              width={500}
              src={social?.image?.url}
              alt="social_icon"
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
