import getAllData from "@/lib/allData";
import Image from "next/image";

const Hero = async () => {
  const data = await getAllData();

  return (
   <div id="about" className="lg:h-screen ">
     <div  className="w-full  flex flex-col  bg-[#333333] ">
      <div className="grid justify-center items-center lg:grid-cols-2 grid-cols-1">
        <div>
          <Image
            className=" h-screen object-cover w-full"
            height={500}
            width={500}
            src={data?.user?.about?.avatar?.url}
            alt="image"
          />
        </div>
        <div className="py-10 px-5  ">
          <div >
            <h1 className="text-white">{data?.user?.about?.title}</h1>
          </div>
          <div  >
            <h1 className="text-5xl my-7 font-bold text-white">
              {data?.user?.about?.name}
            </h1>
          </div>
       
          <div  >
            <h1 className="text-white mb-7 text-justify">
              {data?.user?.about?.description}
            </h1>
          </div>
         
          <div >
            <button
              type="button"
              class="border-2 border-[#ff714a] hover:bg-[#ff714a] px-7 py-2 text-white"
            >
              Contact{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
   </div>
  );
};

export default Hero;
