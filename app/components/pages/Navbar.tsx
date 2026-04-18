"use client";
import React from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState<string | null>(null);

  return (
    <>
      <nav className="relative text-white flex items-center p-4">
        <div className="absolute left-0 top-0 w-[0.5px] h-screen bg-white"></div>
        <div className="absolute right-0 top-0 w-[0.5px] h-screen bg-white"></div>
        <div className="absolute -left-32 top-24 w-screen h-[0.5px] bg-white"></div>
        
        <div className="flex justify-between w-full px-8 py-4">
          <div className="flex gap-8">
            <svg
              width="92"
              height="28"
              viewBox="0 0 92 28"
              fill="white"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVG">
                <path
                  id="Vector"
                  d="M40.6834 21.7946H31.0183C30.9961 21.7946 30.9961 21.7946 30.9961 21.7721V6.08401C30.9961 6.06152 30.9961 6.06152 31.0183 6.06152H40.6834C44.3358 6.06152 45.6944 7.99445 45.6944 11.3883V16.3555C45.6944 19.7718 44.3358 21.7946 40.6834 21.7946ZM35.0047 9.77005V18.0861H41.6413C41.6635 18.0861 41.6635 18.0861 41.6635 18.0636V9.79252C41.6635 9.77005 41.6635 9.77005 41.6413 9.77005H35.0047Z"
                  fill="currentColor"
                ></path>
                <path
                  id="Vector_2"
                  d="M58.6205 21.7946H50.0911C47.6416 21.7946 46.7285 20.7158 46.7285 18.3558V9.50035C46.7285 7.14036 47.6416 6.06152 50.0911 6.06152H58.643C61.0925 6.06152 61.9834 7.14036 61.9834 9.50035V18.3558C61.9834 20.7158 61.0703 21.7946 58.6205 21.7946ZM50.7816 18.0861H57.9525C57.9747 18.0861 57.9748 18.0861 57.9748 18.0636V9.79252C57.9748 9.77005 57.9747 9.77005 57.9525 9.77005H50.7816C50.7594 9.77005 50.7594 9.77005 50.7594 9.79252V18.0636C50.7594 18.0861 50.7594 18.0861 50.7816 18.0861Z"
                  fill="currentColor"
                ></path>
                <path
                  id="Vector_3"
                  d="M73.7308 21.7946H62.9075C62.8853 21.7946 62.8853 21.7946 62.8853 21.7721V18.1086C62.8853 18.0861 62.8853 18.0861 62.9075 18.0861H73.0181C73.0403 18.0861 73.0403 18.0861 73.0403 18.0636V15.7711C73.0403 15.7486 73.0403 15.7486 73.0181 15.7486H66.1812C63.7315 15.7486 62.8184 14.6698 62.8184 12.3098V9.54528C62.8184 7.18532 63.7759 6.06152 66.2704 6.06152H76.9375C76.96 6.06152 76.96 6.06152 76.96 6.08401V9.74756C76.96 9.77005 76.96 9.77005 76.9375 9.77005H66.8715C66.8492 9.77005 66.8492 9.77005 66.8492 9.79252V12.0176C66.8492 12.0401 66.8492 12.0401 66.8715 12.0401H73.7308C76.1581 12.0401 77.0712 13.0965 77.0712 15.4789V18.3558C77.0712 20.7158 76.1581 21.7946 73.7308 21.7946Z"
                  fill="currentColor"
                ></path>
                <path
                  id="Vector_4"
                  d="M88.6622 21.7946H77.8389C77.8167 21.7946 77.8167 21.7946 77.8167 21.7721V18.1086C77.8167 18.0861 77.8167 18.0861 77.8389 18.0861H87.9497C87.972 18.0861 87.972 18.0861 87.972 18.0636V15.7711C87.972 15.7486 87.972 15.7486 87.9497 15.7486H81.1126C78.6631 15.7486 77. seventy-five 14.669 eight; seventy-five one-two-three-zero-nine-eightV nine-five-four-five-two-eightC seventy-five seven-one-eight-five-three-two seventy-eight-seven-zero-seven-six seventy-eight-seven-zero-seven-sixH ninety-one-eight-six-nine-twoC ninety-one-eight-nine-one-four sixty-one-fifty-two ninety-one-eight-nine-one-four sixty-one-fifty-twoH eighty-one-eight-zero-three-oneC eighty-one-seven-eight-zero-nine sixty-one-fifty-two eighty-one-seven-eight-zero-nine sixty-one-fifty-twoH eighty-eight-six-six-two-twoC ninety-one-zero-eight-nine-seven sixty-one-fifty-two ninety-two-zero-zero-two-eight sixty-one-fifty-twoZ"
                  fill="currentColor"
                ></path>
                <path
                  id="Vector_5"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M0 2.95682C0 2.85932 0.0783196 2.78027 0.174931 2.78027H15.6056C15.7022 2.78027 15.7805 2.85932 15.7805 2.95682V9.15081H6.31222V18.7066H0.174931C0.0783196 18.7066 0 18.6276 0 18.53V2.95682Z"
                  fill="currentColor"
                ></path>
                <path
                  id="Vector_6"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M22.0872 24.9011C22.0872 24.9986 22.0089 25.0777 21.9123 25.0777H6.48157C6.38497 25.0777 6.30664 24.9986 6.30664 24.9011V18.7071H15.775V9.15137H21.9123C22.0089 9.15137 22.0872 9.23039 22.0872 9.32791V24.9011Z"
                  fill="currentColor"
                ></path>
              </g>
            </svg>

            <div
              onMouseEnter={() => setIsOpen("products")}
              onMouseLeave={() => setIsOpen(null)}
              className="cursor-pointer"
            >
              Products
            </div>
            <div
              // onMouseEnter={() => setisOpen("solutions")}
              // onMouseLeave={() => setisOpen(null)}
              className="cursor-pointer"
            >
              Solutions
            </div>

            <div
              // onMouseEnter={() => setisOpen("resources")}
              // onMouseLeave={() => setisOpen(null)}
              className="cursor-pointer"
            >
              Resources
            </div>
            <div
              // onMouseEnter={() => setisOpen("resources")}
              // onMouseLeave={() => setisOpen(null)}
              className="cursor-pointer"
            >
              Integrations
            </div>
            <div
              // onMouseEnter={() => setisOpen("resources")}
              // onMouseLeave={() => setisOpen(null)}
              className="cursor-pointer"
            >
              Careers
            </div>
          </div>

          <div className="flex items-center gap-8 ">
            <div
              // onMouseEnter={() => setisOpen("resources")}
              // onMouseLeave={() => setisOpen(null)}
              className="cursor-pointer"
            >
              Sign in
            </div>
            <div
              // onMouseEnter={() => setisOpen("resources")}
              // onMouseLeave={() => setisOpen(null)}
              className="px-6 p-2 w-fit text-sm bg-white text-black rounded-full cursor-pointer"
            >
              Book a demo
            </div>
          </div>

          {/* <div className="max-w-6xl mx-auto border-b border-white"></div> */}

        </div>

        {isOpen && (
          <div
            onMouseEnter={() => setIsOpen(isOpen)}
            onMouseLeave={() => setIsOpen(null)}
            className="absolute left-1/2 -translate-x-1/2 top-10 text-white shadow-lg"
          >
            <div className="flex justify-center">
              <div className="min-w-6xl px-8 py-22 grid grid-cols-3 gap-6">
                {isOpen === "products" && (
                  <>
                    <div className="relative">
                      <h2 className="font-semibold mb-3 text-gray-500">
                        All Products
                      </h2>
                      <p className="text-lg text-white font-medium w-60">
                        The Operations Cloud built for the real world
                      </p>
                      <div className="absolute right-0 -top-8 w-[0.5px] h-screen bg-white"></div>
                    </div>
                    <div>
                      <h2 className="font-semibold mb-3">Product 2</h2>
                      <p className="text-sm text-gray-600">Description</p>
                    </div>
                    <div>
                      <h2 className="font-semibold mb-3">Product 3</h2>
                      <p className="text-sm text-gray-600">Description</p>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
