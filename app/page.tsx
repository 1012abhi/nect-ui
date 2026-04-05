import Image from "next/image";
import Button from "./ui/button";
import ButtonChat from "./components/button/Button";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      {/* <Button /> */}
      <ButtonChat />
    </div>
  );
}
