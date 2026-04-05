
import { cn } from "@/app/lib/utils"

export default function ButtonChat() {
    return (
        <>
            <button className="relative rounded-lg p-0.5 pl-8 group border tracking-tight border-white/20 flex items-center gap-2 cursor-pointer">
                <Box />
                <span className="inline-block group-hover:-translate-x-8 ease-out transition-transform duration-400 p-0.5">

                    Chat with Abhi
                </span>
            </button>
        </>
    )
}


const Box = () => {
    return (
        <div className="absolute left-0.5 flex flex-col justify-center items-center gap-px size-6 rounded-sm bg-amber-400 
        group-hover:left-[calc(100%-1.5rem-2px)] group-hover:transform group-hover:rotate-180 ease-out transition-all duration-400">
          <div className="flex gap-px items-center">
            <Bubble />
            <Bubble />
            <Bubble highlight />
            <Bubble />
            <Bubble />
          </div>
          <div className="flex gap-px items-center">
            <Bubble />
            <Bubble />
            <Bubble />
            <Bubble highlight />
            <Bubble />
          </div>
          <div className="flex gap-px items-center">
            <Bubble highlight/>
            <Bubble highlight/>
            <Bubble highlight/>
            <Bubble highlight/>
            <Bubble highlight/>
          </div>
          <div className="flex gap-px items-center">
            <Bubble />
            <Bubble />
            <Bubble />
            <Bubble highlight />
            <Bubble />
          </div>
          <div className="flex gap-px items-center">
            <Bubble />
            <Bubble />
            <Bubble highlight />
            <Bubble />
            <Bubble />
          </div>
          
        </div>
    )
}


const Bubble = ({ highlight }: { highlight?: boolean }) => {
    return (
        <>
            <span className={cn("size-0.75 bg-white/25 rounded-full", highlight && "animate-pulse ease-linear duration-200 bg-white")}/>
        </>
    )
}