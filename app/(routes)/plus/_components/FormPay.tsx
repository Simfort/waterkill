"use client";
import { Packet } from "@/lib/packets";
import { createPortal } from "react-dom";
import { motion } from "motion/react";
import { CreditCard } from "lucide-react";
import { useState } from "react";
import CardPayMethod from "./CardPayMethod";

export default function FormPay({
  selectedPacket,
}: {
  selectedPacket: Packet;
}) {
  const [methodPay, setMethodPay] = useState(0);
  return createPortal(
    <div className="fixed flex items-center justify-center top-0 right-0 left-0 bottom-0 h-screen bg-[#00000075]">
      <motion.form className="w-[640px] ">
        <div className="h-[50px] bg-black rounded-[50px] text-white flex items-center  text-xl justify-around">
          <h2>{selectedPacket.title}</h2>
          <h2>
            {selectedPacket.price} <span className="text-primary">$</span>
          </h2>
        </div>
        <div className=" pt-[20px] overflow-hidden bg-white mt-5 rounded-b-[50px] ">
          <h2 className="text-center text-xl">Chose a method</h2>
          <div className="px-[20px] flex mt-[20px] items-center gap-10">
            <button
              type="button"
              onClick={() => setMethodPay(0)}
              className={` w-full  text-xl h-[45px] flex items-center transition-all justify-center gap-2 rounded-[10px] ${
                !methodPay
                  ? "bg-primary text-white  shadow-inner shadow-blue-600 "
                  : "text-accent shadow hover:shadow-inner  shadow-primary border-primary"
              }`}>
              {" "}
              <CreditCard />
              <p>Card</p>
            </button>
            <button
              type="button"
              onClick={() => setMethodPay(1)}
              className={` w-full  text-xl h-[45px] flex items-center transition-all   justify-center gap-2 rounded-[10px] ${
                methodPay
                  ? "bg-primary text-white"
                  : "text-accent hover:shadow-inner shadow shadow-primary border-primary"
              }`}>
              {" "}
              Google Pay
            </button>
          </div>
          <CardPayMethod />
          <button className="text-center mt-[50px] text-white h-[50px] w-full bg-primary">
            Pay {selectedPacket.price} <span>$</span>
          </button>
        </div>
      </motion.form>
    </div>,
    document.body
  );
}
