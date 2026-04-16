import React from "react";
import { CiImageOn } from "react-icons/ci";
import { HiOutlineSparkles } from "react-icons/hi";
import { LuSendHorizontal } from "react-icons/lu";
import { RiMicLine } from "react-icons/ri";

function ButtonPrompt() {
  return (
    <>
      <div className="outline-2 outline-zinc-700 bg-zinc-900 min-w-2/6 min-h-2/12 rounded-4xl p-6">
        <div className="focus-within:outline-2 focus-within:outline-zinc-700 rounded-2xl text-xl mb-4">
          <textarea
            className="p-2 px-3 w-full outline-none"
            placeholder="Type your thoughts..."
          />
        </div>
        <div className="flex items-center justify-between mt-18">
          <div className="flex gap-4">
            <span className="p-4 rounded-full border-2 border-white/10 cursor-pointer transition-transform hover:rotate-180 duration-400">
              <HiOutlineSparkles className="size-8 text-gray-500 hover:text-blue-500 text-3xl" />
            </span>
            <span className="p-4 rounded-full border-2 border-white/10 cursor-pointer">
              <RiMicLine className="size-8 text-gray-500 hover:text-red-500 text-3xl " />
            </span>
            <span className="p-4 rounded-full border-2 border-white/10 cursor-pointer">
              <input type="file" id="image-upload" className="hidden" />
              <label htmlFor="image-upload">
                <CiImageOn className="size-8 text-gray-500 hover:text-green-500 text-3xl" />
              </label>
            </span>
          </div>
          <div>
            <button className="px-8 py-3 rounded-4xl border-2 bg-green-300/10 border-white/10 cursor-pointer">
              <LuSendHorizontal className="size-8 text-gray-500 hover:text-[#A3D977] text-3xl " />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ButtonPrompt;
