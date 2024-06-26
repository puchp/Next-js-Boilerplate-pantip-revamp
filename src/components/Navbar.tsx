import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { BiUser } from 'react-icons/bi';
// eslint-disable-next-line import/no-extraneous-dependencies
import { FiSearch } from 'react-icons/fi';

const Navbar = () => {
  return (
    <div className="sticky top-0 z-50 border-b bg-white/[95%]  ">
      <div className="flex items-center justify-between sm:mx-6 md:mx-10 lg:mx-12 ">
        {/* Left */}
        <a href="/" className="flex  h-20">
          {/* eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text */}
          <img src="/assets/images/logo1.png" className="object-cover" />
        </a>
        {/* Middle */}
        <div className="relative hidden items-center justify-center rounded-full border shadow-sm shadow-gray-400 lg:flex ">
          <input
            type="search"
            placeholder="ค้นหาบน Pantip"
            className="w-80 rounded-full py-2.5 pl-2 text-[14px] outline-0"
          />
          <div className="absolute flex w-full justify-between pl-6 pr-16 font-semibold text-gray-600" />
          <div className="mr-2 rounded-full bg-[#4e478f] p-2">
            <FiSearch className="w-full text-white" />
          </div>
        </div>
        {/* Right */}
        <div className="flex items-center pr-3  font-semibold text-gray-600">
          {/* <div className="mx-8 flex items-center gap-1">
            <BiWorld className="" />
            <div className="">EN</div>
          </div> */}

          <div
            className="flex h-[40px] items-center gap-2 rounded-full border bg-[#4e478f] px-3 py-2 text-[14px]
           text-white shadow-lg shadow-gray-300 duration-100 ease-out hover:bg-[#9a4fbf]"
          >
            {/* <p>Sign up</p> */}
            <BiUser className="text-[22px]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
