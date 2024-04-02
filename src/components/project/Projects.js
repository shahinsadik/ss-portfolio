
import getAllData from "@/lib/allData";
import Image from "next/image";
import MyModal from "./MyModal";


const Projects = async () => {
  const allProject = await getAllData();
  return (
    <div id="projects" className="p-2 lg:p-10">
      <h1 className="font-bold text-2xl text-white pb-3 border-b-[#333333] border-b-2">
        My Projects
      </h1>
      <h1 className="text-right text-white mt-3">My Projects</h1>
      <div>
        <div className="grid gap-5 lg:grid-cols-2 grid-cols-1 mt-5  ">
          {allProject?.user?.projects?.map((project) => (
            <div
              key={project?.title}
              className=" shadow-2xl bg-[#333333] rounded-b-md"
            >
              <div data-aos="zoom-in-up" data-aos-duration="1000" className=" ">
                <Image
                  className=" w-full  hover:animate-pulse  bg-cover   "
                  height={500}
                  width={500}
                  src={project?.image?.url}
                  alt={project?.name}
                />
              </div>
              <div className="p-5">
                <span className="text-sm text-white">{project?.techStack}</span>
                <h1 className="text-xl my-2 font-bold text-white">
                  {project?.title}
                </h1>
                <span className=" text-sm text-white">
                  {project?.description}
                </span>
               <MyModal project={project} />
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </div>
  );
};

export default Projects;
