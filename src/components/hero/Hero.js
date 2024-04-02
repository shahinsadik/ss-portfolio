import getAllData from "@/lib/allData";
import Image from "next/image";

const Hero = async () => {
  const data = await getAllData();

  return (
    <div id="about" className="w-full lg:h-screen flex flex-col  bg-[#333333] ">
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
        <div className="py-5 px-16 ">
          <div data-aos="fade-left">
            <h1 className="text-white">{data?.user?.about?.title}</h1>
          </div>
          <div data-aos-duration="1000" data-aos="fade-left">
            <h1 className="text-5xl my-7 font-bold text-white">
              {data?.user?.about?.name}
            </h1>
          </div>
          {/* <h1>{data.user.about.subTitle}</h1> */}
          <div data-aos="fade-left" data-aos-duration="1500">
            <h1 className="text-white mb-7 text-justify">
              {data?.user?.about?.description}
            </h1>
          </div>
          {/* <h1>{data.user.about.quote}</h1>
          <h1>{data.user.about.exp_year}</h1>
          <h1>{data.user.about.address}</h1>
          <h1>{data.user.about.some_total}</h1>
          <h1>{data.user.about.phoneNumber}</h1>
          <h1>{data.user.about.contactEmail}</h1> */}
          <div data-aos-duration="2000" data-aos="fade-left">
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
  );
};

export default Hero;
