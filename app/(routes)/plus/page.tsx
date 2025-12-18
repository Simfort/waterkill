import Image from "next/image";
import Packets from "./_components/Packets";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function Page() {
  return (
    <div className="w-full  grid grid-cols-5">
      <header className="h-[100px] flex items-center col-span-5 grid-cols-subgrid grid">
        <div className="w-full flex justify-center">
          <Link
            href={"/"}
            className="text-primary hover:opacity-50 transition-colors ">
            <ArrowLeft size={40} />
          </Link>
        </div>
        <h1 className="col-start-2  items-center text-[24px] flex gap-2">
          Water Kill <span className="text-primary">PLUS</span>
          <Image
            width={42}
            height={42}
            src="/dropletplus.svg"
            alt="droplet plus"
          />
        </h1>
      </header>
      <div className="text-[16px] text-accent col-start-2">
        <h3 className="text-primary">The subscription includes:</h3>
        <ul className="pl-[50px] flex font-normal flex-col gap-2 mt-2">
          <li>Unlimited number of characters</li>
          <li>Accuracy of finding</li>
          <li>Explaining each problem in the text</li>
          <li>
            Access to tools such as{" "}
            <span className="text-primary">`Make a Story`</span>
          </li>
        </ul>
      </div>
      <Packets />
    </div>
  );
}
