import getAllData from "@/lib/allData";
import {
  IoCallOutline,
  IoMailOutline,
  IoLocationOutline,
  IoCheckmarkCircleSharp,
} from "react-icons/io5";

const Contact = async () => {
  const contact = await getAllData();
  return (
    <div id="contact" className="h-screen p-5 lg:p-10 ">
      <h1 className="font-bold text-2xl text-white pb-3  border-b-[#333333] border-b-2">
        Contact Me
      </h1>
      <h1 className="text-right text-white mt-3">Get in Touch</h1>
      <div className="grid lg:grid-cols-4 grid-cols-2 mt-5 gap-5">
        <div className="border p-10 flex flex-col justify-center items-center  bg-[#333333]">
          <IoCallOutline className="hover:animate-spin text-4xl text-center mb-2 text-white " />
          <h1 className="text-center text-white ">
            {contact.user.about.phoneNumber}
          </h1>
        </div>
        <div className="border p-10 flex flex-col justify-center items-center  bg-[#333333]">
          <IoLocationOutline className=" hover:animate-spin text-4xl text-center mb-2 text-white " />
          <h1 className="text-center text-white">
            {contact.user.about.address}
          </h1>
        </div>
        <div className="border p-10 flex flex-col justify-center items-center  bg-[#333333]">
          <IoMailOutline className="hover:animate-spin text-4xl text-center mb-2 text-white " />
          <h1 className="text-center text-white">
            {contact.user.about.contactEmail}
          </h1>
        </div>
        <div className="border p-10 flex flex-col justify-center items-center  bg-[#333333]">
          <IoCheckmarkCircleSharp className="hover:animate-spin text-4xl text-center mb-2 text-white " />
          <h1 className="text-center text-white">Got Hired</h1>
        </div>
      </div>
      <div className="grid grid-cols-2 pt-10 bg-[#222222] lg:mx-20 gap-5">
        <div className="flex flex-col  ">
          <input
            id="Name"
            rows="1"
            class="text-sm text-gray-900 w-full p-2  border border-gray-500 bg-[#222222] "
            placeholder="Your Name"
          ></input>
          <input
            id="Email"
            rows="1"
            class="text-sm my-5  text-gray-900 w-full p-2   border border-gray-500 bg-[#222222] "
            placeholder="Your Email"
          ></input>
          <input
            id="Subject"
            rows="1"
            class="text-sm text-gray-900 w-full p-2  border border-gray-500 bg-[#222222] "
            placeholder="Subject"
          ></input>
        </div>
        <div>
          <textarea
            id="message"
            rows="4"
            class=" p-2.5 w-full text-sm text-gray-900   border border-gray-500 bg-[#222222] "
            placeholder="Write your thoughts here..."
          ></textarea>
          <button
            type="submit"
            class=" border hover:bg-[#ff714a] px-7 py-2 text-gray-300 hover:text-white"
          >
            Send Message
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
