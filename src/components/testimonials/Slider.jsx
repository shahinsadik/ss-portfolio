"use client";
import { Carousel } from "flowbite-react";
import Image from "next/image";
import React, { useState, useEffect } from "react";

const Slider = () => {
  const [items, setItems] = useState([]); // Set initial state as an empty array
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setItems(data.user.testimonials); // Assuming 'data' structure matches expected format
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="">
      <div className="h-screen">
        <Carousel
          onSlideChange={(index) =>  console.log("onSlideChange()", index)}
        >
          {items.map((item) => (
            <div key={item._id}>
              <h1 className="text-white text-2xl">{item.company_name}</h1>
              <figure className="mx-auto max-w-screen-md text-center border-2 p-5">
                <svg
                  className="mx-auto mb-3 h-10 w-10 text-gray-400 dark:text-gray-600"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 18 14"
                >
                  <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
                </svg>
                
                <blockquote>
                  <p className="lg:text-2xl text-sm font-medium italic text-gray-400 dark:text-white">
                    {item.review}
                  </p>
                </blockquote>
                <figcaption className="flex items-center lg:mx-20 mt-6 space-x-3 rtl:space-x-reverse">
                  <Image
                    className="w-20 h-20 rounded-full hover:animate-spin bg-cover"
                    height={500}
                    width={500}
                    src={item?.image?.url}
                    alt={item?.name}
                  />
                  <div className="flex items-center divide-x-2 rtl:divide-x-reverse divide-gray-300 dark:divide-gray-700">
                    <cite className="pe-3 font-medium text-white dark:text-white">
                      {item.name}
                    </cite>
                    <cite className="ps-3 text-white text-sm dark:text-gray-400">
                      {item?.position}
                    </cite>
                  </div>
                </figcaption>
              </figure>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Slider;
