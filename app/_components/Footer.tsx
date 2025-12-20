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
        <p className="text-[#878787]">© 2025 Waterkill.Все права защищены..</p>
        <p>
          <a className="text-[#0015FF]" href="#">
            Политика конфиденциальности
          </a>{" "}
          |{" "}
          <a className="text-[#0015FF]" href="#">
            Условия обслуживания
          </a>{" "}
          |
          <a className="text-[#0015FF]" href="#">
            Связаться с нами
          </a>
        </p>
      </div>{" "}
      <Button className="col-start-2 col-span-2 bg-[#4C00FF] text-white">
        О нас
      </Button>
    </motion.footer>
  );
}
