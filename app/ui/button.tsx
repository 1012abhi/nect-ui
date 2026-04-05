'use client'

import { cn } from "../lib/utils"

export default function Button() {
    return (
        <>
            <button className={cn("bg-[#101010] hover:bg-[#202020] text-white font-normal py-2 px-8 rounded-full transform transition-opacity")}>
                Button
            </button>
        </>
    )
}