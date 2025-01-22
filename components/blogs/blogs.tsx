import Image from "next/image";
import React from "react";
import { FaSearch } from "react-icons/fa";

const Blogs = () => {
  return (
    <div>
      <section className="bg-white dark:bg-gray-900">
        <div className="container px-6 py-10 mx-auto">
          {/* Header */}
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">
              Recent Posts
            </h1>
            <button className="focus:outline-none">
              <FaSearch className="w-6 h-6 text-gray-600 transition-colors duration-300 transform dark:text-gray-400 hover:text-blue-500" />
            </button>
          </div>

          <hr className="my-8 border-gray-200 dark:border-gray-700" />

          {/* Blog Cards */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
            {/* Card 1 */}
            <div>
              <Image
                width={400}
                height={400}
                className="object-cover object-center w-full h-64 rounded-lg lg:h-80"
                src="https://images.unsplash.com/photo-1624996379697-f01d168b1a52?ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80"
                alt="Blog 1"
              />
              <div className="mt-8">
                <span className="text-blue-500 uppercase">Category</span>
                <h1 className="mt-4 text-xl font-semibold text-gray-800 dark:text-white">
                  What do you want to know about UI
                </h1>
                <p className="mt-2 text-gray-500 dark:text-gray-400">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
                  est asperiores vel, ab animi recusandae nulla veritatis id
                  tempore sapiente.
                </p>
                <div className="flex items-center justify-between mt-4">
                  <div>
                    <a
                      href="#"
                      className="text-lg font-medium text-gray-700 dark:text-gray-300 hover:underline hover:text-gray-500"
                    >
                      John Snow
                    </a>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      February 1, 2022
                    </p>
                  </div>
                  <a
                    href="#"
                    className="inline-block text-blue-500 underline hover:text-blue-400"
                  >
                    Read more
                  </a>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div>
              <Image
                width={400}
                height={400}
                className="object-cover object-center w-full h-64 rounded-lg lg:h-80"
                src="https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80"
                alt="Blog 2"
              />
              <div className="mt-8">
                <span className="text-blue-500 uppercase">Category</span>
                <h1 className="mt-4 text-xl font-semibold text-gray-800 dark:text-white">
                  All the features you want to know
                </h1>
                <p className="mt-2 text-gray-500 dark:text-gray-400">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
                  est asperiores vel, ab animi recusandae nulla veritatis id
                  tempore sapiente.
                </p>
                <div className="flex items-center justify-between mt-4">
                  <div>
                    <a
                      href="#"
                      className="text-lg font-medium text-gray-700 dark:text-gray-300 hover:underline hover:text-gray-500"
                    >
                      Arthur Melo
                    </a>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      February 6, 2022
                    </p>
                  </div>
                  <a
                    href="#"
                    className="inline-block text-blue-500 underline hover:text-blue-400"
                  >
                    Read more
                  </a>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div>
              <Image
                width={400}
                height={400}
                className="object-cover object-center w-full h-64 rounded-lg lg:h-80"
                src="https://images.unsplash.com/photo-1597534458220-9fb4969f2df5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1374&q=80"
                alt="Blog 3"
              />
              <div className="mt-8">
                <span className="text-blue-500 uppercase">Category</span>
                <h1 className="mt-4 text-xl font-semibold text-gray-800 dark:text-white">
                  Which services you get from Meraki UI
                </h1>
                <p className="mt-2 text-gray-500 dark:text-gray-400">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
                  est asperiores vel, ab animi recusandae nulla veritatis id
                  tempore sapiente.
                </p>
                <div className="flex items-center justify-between mt-4">
                  <div>
                    <a
                      href="#"
                      className="text-lg font-medium text-gray-700 dark:text-gray-300 hover:underline hover:text-gray-500"
                    >
                      Tom Hank
                    </a>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      February 19, 2022
                    </p>
                  </div>
                  <a
                    href="#"
                    className="inline-block text-blue-500 underline hover:text-blue-400"
                  >
                    Read more
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blogs;
