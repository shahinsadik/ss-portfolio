import getAllData from "@/lib/allData";

const Timeline = async () => {
  const data = await getAllData();
  return (
    <div id="timeline" className=" p-5 lg:p-10">
      <h1 className="font-bold text-2xl text-white pb-3 border-b-[#333333] border-b-2">
        Resume
      </h1>
      <h1 className="text-right text-white mt-3">5 Years of Experience</h1>
      <div className="lg:flex gap-5 mt-5">
        <div>
          {/* Education ------------------> */}
          <div className="">
            <h1 className="text-3xl text-white mb-5">Education</h1>
            {data?.user?.timeline?.map((item, index) => (
              <div className="" key={index}>
                {item.forEducation && (
                  <div className="grid grid-cols-7 gap-5  text-white">
                    <div className="border-r px-5 col-span-2 relative">
                      <div>
                      <h1>{item.company_name}</h1>
                      <h1>
                        {new Date(item.startDate).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </h1>

                      </div>
                      <div className="h-4 w-4 rounded-full bg-red-800 absolute -right-2 top-2">

                      </div>
                    </div>

                    <div className="col-span-5 pb-5 space-y-5">
                      <h1>{item.jobTitle}</h1>
                      <h1>{item.bulletPoints}</h1>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Experience  ----------------------> */}
          <div className="mt-5">
            <h1 className="text-3xl text-white mb-5">Experience</h1>
            {data.user.timeline.map((item, index) => (
              <div className="" key={index}>
                {!item.forEducation && (
                  <div className="grid grid-cols-7 gap-5  text-white">
                    <div className="border-r px-5 col-span-2  relative">
                      <div>
                      <h1>{item.company_name}</h1>
                      <h1>
                        {new Date(item.startDate).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </h1>

                      </div>
                      <div className="h-4 w-4 rounded-full bg-red-800 absolute -right-2 top-2">

                      </div>
                    </div>

                    <div className="col-span-5 pb-5 space-y-5">
                      <h1>{item.jobTitle}</h1>
                      <h1>{item.bulletPoints}</h1>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        <div>
          {" "}
          optimized database schemas for performance and scalability.
          Implemented real-time messaging features using WebSockets and Redis.
          Worked closely with frontend developers to design APIs and ensure
          smooth integration with the frontend. DataTech Solutions
          2024-03-13T00:00:00.000Z Full Stack Developer{" "}
        </div>
      </div>
    </div>
  );
};

export default Timeline;
