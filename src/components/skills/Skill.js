import getAllData from "@/lib/allData";
import Image from "next/image";

const Skill = async () => {
  const img = await getAllData();
  return (
    <div id="skill" className="lg:h-screen p-2 lg:p-10 ">
      <div>
        <h1 className="font-bold text-2xl text-white pb-3 border-b-[#333333] border-b-2">
          My Skills
        </h1>
        <h1 className="text-right text-white mt-3">My Skill</h1>
        <div className="grid gap-5 lg:grid-cols-5 grid-cols-3 mt-5  ">
          {img?.user?.skills?.map((img) => (
            <div key={img?.platform} className="">
              <div className="flex gap-5 p-5 bg-[#333333] justify-center items-center">
              {img.image.url ? <Image
                  className=" lg:h-16 lg:w-16 w-6 h-6 hover:animate-spin  bg-cover rounded-2xl   "
                  height={500}
                  width={500}
                  src={img.image.url}
                  alt={img?.name}
                /> : ""}
                
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skill;
