import getAllData from "@/lib/allData";
import Image from "next/image";

const Services = async () => {
  const img = await getAllData();
  return (
    <div id="service" className="p-2 lg:p-10 lg:h-screen w-full">
      <div>
        <span className="font-bold text-2xl text-white border-b-orange-600 border-b-2">
          What I Do
        </span>
      </div>
      <div className="grid gap-5 lg:grid-cols-2 grid-cols-1 mt-10 ">
        {img?.user?.services?.map((service) => (
          <div key={service?.platform} className="">
            <div className="lg:flex gap-2 lg:gap-5 lg:p-5 ">
              <Image
                className=" h-14 w-14   bg-cover rounded-2xl   "
                height={500}
                width={500}
                src={service?.image?.url}
                alt="social_icon"
              />
              <div>
                <h1 className="text-white text-xl font-semibold"> {service?.name}</h1>
                <h1 className="text-white text-sm my-2"> {service?.desc}</h1>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
