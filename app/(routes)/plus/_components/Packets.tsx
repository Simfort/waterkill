"use client";
import { PACKETS } from "@/lib/packets";
import PacketCard from "./PacketCard";
import { useState } from "react";
import FormPay from "./FormPay";

export default function Packets() {
  const [flagFormPay, setFlagFormPay] = useState(false);
  const [selectedPacket, setSelectedPacket] = useState(1);
  return (
    <section className="grid mt-[100px]  grid-cols-subgrid col-span-5">
      <div className="col-start-2  grid grid-rows-[1fr_0.5fr_3fr_1fr_1fr] overflow-hidden col-span-3 shadow-2xl h-[600px] rounded-[20px]">
        <div className="w-full bg-primary flex h-[100px] items-center justify-center">
          <h2 className="text-[24px] text-white">Packets</h2>
        </div>{" "}
        <h2 className="text-center mt-[10px] text-[20px] text-primary">
          Choose a convenient one{" "}
        </h2>
        <ol className="flex gap-5 items-center justify-center">
          {PACKETS.map((packet, i) => (
            <PacketCard
              selected={selectedPacket}
              setSelected={setSelectedPacket}
              packet={packet}
              key={i}></PacketCard>
          ))}
        </ol>
        <div className="bg-[#F0EDED] h-[88px] w-full flex items-center text-accent justify-center self-end">
          <p>{PACKETS[selectedPacket].description}</p>
        </div>
        <button
          onClick={() => setFlagFormPay(true)}
          className="bg-black self-end text-white w-full h-[100px] text-[20px] hover:opacity-50 transition-all active:opacity-29">
          Buy for {PACKETS[selectedPacket].price} $
        </button>
      </div>
      {flagFormPay && <FormPay selectedPacket={PACKETS[selectedPacket]} />}
    </section>
  );
}
