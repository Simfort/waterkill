import { Packet } from "@/lib/packets";
import Image from "next/image";
import { motion, Variants } from "motion/react";
import { Infinity } from "lucide-react";

const variants: Variants = {
  up: {
    y: -50,
  },
  start: {
    y: 0,
  },
};

export default function PacketCard({
  packet,
  selected,
  setSelected,
}: {
  packet: Packet;
  selected: number;
  setSelected: (arg: number) => void;
}) {
  return (
    <motion.div
      initial={"start"}
      animate={selected === packet.id ? "up" : "start"}
      variants={variants}
      onClick={() => setSelected(packet.id)}
      className={`flex cursor-pointer items-center w-[174px] p-[40px] justify-center border transition-colors duration-200 h-[163px] hover:border-primary text-[#00000049] flex-col rounded-[20px] gap-[32px]  ${
        selected === packet.id
          ? "bg-primary border-primary text-white"
          : "border-[#66666649]"
      }`}>
      {packet.title ? (
        <h2 className="text-[24px]">{packet.title}</h2>
      ) : (
        <Infinity
          size={100}
          className={` ${packet.id === selected ? "text-white " : ""}`}
        />
      )}

      <h3 className="text-[16px]">{packet.price} $</h3>
    </motion.div>
  );
}
