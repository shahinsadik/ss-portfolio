"use client"
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const MyModal = ({ project }) => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div>
      {/* Modal toggle button */}
      <button
        className="border-2 border-[#ff714a] mt-5 hover:bg-[#ff714a] px-7 py-2 text-white"
        onClick={toggleModal}
        type="button"
      >
        View details
      </button>

      {/* Main modal */}
      {showModal && (
        <div
          id="default-modal"
          tabIndex="-1"
          aria-hidden="true"
          className="fixed top-0 right-0 bottom-0 left-0 z-50 flex justify-center items-center w-full md:inset-0 bg-gray-900 bg-opacity-50"
        >
          <div className="relative p-4 w-full my-10">
            {/* Modal content */}
            <div className="relative bg-[#333333] shadow dark:bg-gray-700 overflow-y-auto  max-h-screen">
              {/* Modal header */}
              <div className="flex  items-center justify-between p-4 md:p-5 border-b border-orange-600 rounded-t dark:border-orange-600">
                <p className="text-2xl font-bold text-white">
                  {project?.title}
                </p>
                <button
                  type="button"
                  className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                  onClick={toggleModal}
                >
                  <svg
                    className="w-3 h-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 14"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                    />
                  </svg>
                  <span className="sr-only">Close modal</span>
                </button>
              </div>
              {/* Modal body */}
              <div className="">
                <div className="grid lg:grid-cols-2 grid-cols-1">
                  <div className=" ">
                    <Image
                      className="w-full bg-cover"
                      height={500}
                      width={500}
                      src={project?.image?.url}
                      alt={project?.name}
                    />
                  </div>

                  <div className="p-5 space-y-3">
                    <h1 className="text-2xl font-bold text-white">
                      {project?.title}
                    </h1>
                    <h1 className="text-sm text-white">
                      <span className="font-bold">TechStack:</span> <br />{" "}
                      {project?.techStack}
                    </h1>

                    <h1 className="text-sm text-white">
                      <span className="font-bold">Description:</span> <br />
                      {project?.description}
                    </h1>
                    <h1 className="text-sm text-white">
                      <span className="font-bold">Sequence:</span> <br />
                      {project?.sequence}
                    </h1>
                  </div>
                </div>
              </div>
              {/* Modal footer */}
              <div className="flex gap-5 flex-col-reverse  md:flex-row justify-between items-center p-5 border-t border-orange-600 rounded-b dark:border-gray-600">
                <button
                  onClick={toggleModal}
                  type="button"
                  className="border-2 border-[#ff714a] hover:bg-[#ff714a] px-7 py-2 text-white"
                >
                  Close
                </button>
                <div>
                  <Link
                    className="border-2 mr-2 border-[#ff714a] mt-5 hover:bg-[#ff714a] px-7 py-2 text-white"
                    href={project?.githuburl}
                  >
                    Github Link
                  </Link>
                  <Link
                    className="border-2 border-[#ff714a] mt-5 hover:bg-[#ff714a] px-7 py-2 text-white"
                    href={project?.liveurl}
                  >
                    Live Link
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyModal;
