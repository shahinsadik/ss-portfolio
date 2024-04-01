import Hero from "@/components/hero/Hero";
import CustomNavbar from "@/components/navbar/Navbar";
import SmallDeviceNav from "@/components/navbar/SmallDeviceNav";
import Projects from "@/components/project/Projects";

import Services from "@/components/service/Services";
import Skill from "@/components/skills/Skill";
import Timeline from "@/components/timeline/Timeline";
import Testimonials from "@/components/testimonials/Testimonials";
import Contact from "@/components/contact/Contact";



export default function Home() {
  return (
    <main className="  bg-black">
      <div className="lg:flex gap-1">
        <div>
          <CustomNavbar />
          <SmallDeviceNav  />
        </div>
        <div className="bg-[#222222] ">
          <Hero />
          <Timeline />
          <Services />
          <Skill />
         <Projects />
          <Testimonials />
          <Contact />
        </div>
      </div>
    </main>
  );
}
