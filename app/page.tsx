"use client";
import Image from "next/image";
import Button from "./_components/Button";
import Textarea from "./_components/Textarea";
import { motion, useScroll, useSpring, useTransform } from "motion/react";

export default function Home() {
  const { scrollY } = useScroll();
  const translateY = useTransform(scrollY, [0, 1], [200, 0]);
  const translateY2 = useTransform(scrollY, [0, 1], [50, 0]);
  const translateYSpring = useSpring(translateY, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  const translateYSpring2 = useSpring(translateY2, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  return (
    <div className="grid grid-cols-12 max-md:grid-cols-6 ">
      <motion.header
        style={{ y: translateYSpring2 }}
        className="col-span-12 h-[114px] max-md:h-[50px]  items-center grid grid-cols-subgrid">
        <Button className="border border-primary text-primary col-start-10 max-md:col-span-2 max-md:col-start-5 ">
          About
        </Button>
      </motion.header>
      <motion.h2
        style={{ y: translateYSpring2 }}
        className="col-start-2 col-end-13 mt-[20px]  max-md:col-start-1 max-md:ml-[20px] text-[24px]">
        <span className="text-primary">AI</span> text processing
      </motion.h2>
      <Textarea translateY={translateYSpring2} />
      <motion.section
        style={{ y: translateYSpring2 }}
        className=" mt-[300px] gap-x-20 max-lg:flex max-lg:justify-center grid-cols-subgrid grid col-start-1 col-end-13">
        <div className="col-start-6  flex flex-col gap-2 items-center col-span-2">
          <h2 className=" text-[14px] text-center">
            You can buy the{" "}
            <span className="text-primary">plus AI access.</span>
          </h2>
          <Button className="bg-[#FF0000] text-white">Buy Plus +</Button>
        </div>
      </motion.section>
      <motion.footer
        style={{ y: translateYSpring }}
        className="col-start-1 grid mt-[120px] grid-cols-subgrid col-end-13 h-[200px]">
        <div className="col-start-2 col-end-12  text-[14px]">
          <p className="text-[#878787]">
            © 2025 Waterkill. All rights reserved.
          </p>
          <p>
            <a className="text-[#0015FF]" href="#">
              Privacy Policy
            </a>{" "}
            |{" "}
            <a className="text-[#0015FF]" href="#">
              Terms of Service
            </a>{" "}
            |
            <a className="text-[#0015FF]" href="#">
              Contact Us
            </a>
          </p>
        </div>{" "}
        <Button className="col-start-2 bg-[#4C00FF] text-white">About</Button>
      </motion.footer>
    </div>
  );
}
