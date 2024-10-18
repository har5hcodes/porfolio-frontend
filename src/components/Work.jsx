import React from "react";

const Work = () => {
  return (
    <div className="flex justify-center  h-5/6 uppercase">
      <div className="flex justify-around w-full h-full p-10">
        <ol class="items-center sm:flex">
          <li class="relative mb-6 sm:mb-0">
            <div class="flex items-center">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.linkedin.com/company/the-mathworks_2/"
                className="z-10 flex items-center justify-center w-6 h-6 bg-red-200 shrink-0 cursor-pointer hover:w-10 hover:h-10 hover:bg-red-500"
                aria-label="Visit Mathworks India Pvt Ltd. on LinkedIn"
              ></a>
              <div class="flex w-full bg-red-200 h-0.5"></div>
            </div>
            <div class="mt-3 sm:pe-8">
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                Mathworks India Pvt Ltd.
              </h3>
              <time class="block mb-2 text-sm font-normal leading-none text-red-400 dark:text-gray-500">
                May 2023 - July 2023
              </time>
              <p class="block mb-2 text-sm font-normal leading-none text-red-400 dark:text-gray-500">
                Hyderabad
              </p>
            </div>
          </li>
          <li class="relative mb-6 sm:mb-0">
            <div class="flex items-center">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.linkedin.com/company/go-navi/"
                className="z-10 flex items-center justify-center w-6 h-6 bg-red-200 shrink-0 cursor-pointer hover:w-10 hover:h-10 hover:bg-red-500"
                aria-label="Visit Navi Technologies on LinkedIn"
              ></a>
              <div class="flex w-full bg-red-200 h-0.5"></div>
            </div>
            <div class="mt-3 sm:pe-8">
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                Navi Technologies
              </h3>
              <time class="block mb-2 text-sm font-normal leading-none text-red-400 dark:text-gray-500">
                July 2024 - Present
              </time>
              <p class="block mb-2 text-sm font-normal leading-none text-red-400 dark:text-gray-500">
                Bangalore
              </p>
            </div>
          </li>
        </ol>
      </div>
    </div>
  );
};

export default Work;
