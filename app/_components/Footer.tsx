"use client";

import { motion, useScroll, useSpring, useTransform } from "motion/react";
import Button from "./Button";

export default function Footer() {
  const { scrollY } = useScroll();
  const translateY = useTransform(scrollY, [0, 1], [200, 0]);
  const translateYSpring = useSpring(translateY, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  return (
    <motion.footer
      style={{ y: translateYSpring }}
      className="col-start-1 grid mt-[120px] grid-cols-12 col-end-13 h-[200px]">
      <div className="col-start-2 col-end-12  text-[14px]">
        <p className="text-[#878787]">© 2025 Waterkill. All rights reserved.</p>
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
  );
}
