import getAllData from "@/lib/allData";

const Timeline = async () => {
  const data = await getAllData();
  return (
    <div id="timeline" className="p-2 lg:p-10 ">
      <h1 className="font-bold text-2xl text-white pb-3 border-b-[#333333] border-b-2">
        Resume
      </h1>
      <h1 className="text-right text-white mt-3">5 Years of Experience</h1>
      <div className="flex gap-5 mt-5">
        <div>
          {/* Education ------------------> */}
          <div className="p-2">
            <span className="text-3xl text-white border-b border-b-orange-400">Education</span>
            <div className="mt-10">
            {data?.user?.timeline?.map((item, index) => (
              <div className="  " key={index}>
                {item.forEducation && (
                  <div className="grid grid-cols-9 gap-5 justify-between  text-white">
                    <div className="col-span-2">
                      <div>
                        <h1 className="lg:text-xl ">
                          {new Date(item.startDate).toLocaleDateString(
                            "en-US",
                            {
                              year: "numeric",
                              month: "long",
                              // day: "numeric",
                            }
                          )}{" "}
                          -
                          {new Date(item.endDate).toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "long",
                            // day: "numeric",
                          })}
                        </h1>
                        <h1 className="text-right text-sm">
                          {item.company_name}
                        </h1>
                      </div>
                    </div>
                      <div className="border-r  px-5 col-span-2 relative">
                      <div className="h-4 w-4 rounded-full  bg-[#333333] absolute -right-2 top-2"></div>
                      </div>


                    <div className="col-span-5 pb-5 space-y-5 ">
                      <h1>{item.jobTitle}</h1>
                      <h1>{item.bulletPoints}</h1>
                    </div>
                  </div>
                )}
              </div>
            ))}
            </div>
          </div>

          {/* Experience  ----------------------> */}
          <div className="mt-10 p-2">
            <span className="text-3xl text-white border-b border-b-orange-400">Experience</span>
           <div className="mt-10">
           {data.user.timeline.map((item, index) => (
              <div className="" key={index}>
                {!item.forEducation && (
                  <div className="grid grid-cols-9 gap-5  text-white">
                    <div className="col-span-2">
                      <div>
                        <h1 className="lg:text-xl">
                          {new Date(item.startDate).toLocaleDateString(
                            "en-US",
                            {
                              year: "numeric",
                              month: "long",
                              // day: "numeric",
                            }
                          )}{" "}
                          -
                          {new Date(item.endDate).toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "long",
                            // day: "numeric",
                          })}
                        </h1>
                        <h1 className="text-right text-sm">
                          {item.company_name}
                        </h1>
                      </div>
                    </div>
                      <div className="border-r  px-5 col-span-2 relative">
                      <div className="h-4 w-4 rounded-full  bg-[#333333] absolute -right-2 top-2"></div>
                      </div>


                    <div className="col-span-5 pb-5 space-y-5 ">
                      <h1>{item.jobTitle}</h1>
                      <h1>{item.bulletPoints}</h1>
                    </div>
                  </div>
                )}
              </div>
            ))}
           </div>
          </div>
        </div>
      </div>
      <button
        type="button"
        class="border-2 mt-10 border-[#ff714a] hover:bg-[#ff714a] px-7 py-2 text-white"
      >
        Download CV{" "}
      </button>
    </div>
  );
};

export default Timeline;
