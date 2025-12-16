"use client";
import { Loader, Send } from "lucide-react";
import { motion, MotionValue } from "motion/react";
import Image from "next/image";
import { useEffect, useState } from "react";
import axios from "axios";
import { formatAiBase, InfoTextBase } from "@/lib/utils";
import InfoText from "./InfoText";

export default function Textarea({
  translateY,
}: {
  translateY: MotionValue<number>;
}) {
  const writehere = `Write here`.split("");
  const [notes, setNotes] = useState("");
  const [flagKill, setFlagKill] = useState(false);
  const [loading, setLoading] = useState({ start: false, done: false });
  const [flagPlus, setFlagPlus] = useState(false);

  const [infoNote, setInfoNote] = useState<InfoTextBase | undefined>(undefined);
  const patternDisabled = (loading.start && !loading.done) || notes.length == 0;
  const sendNotes = async () => {
    if (notes.length > 300) {
      setFlagPlus(true);
    } else {
      setLoading({ start: true, done: false });
      const res = await axios.post("/api/nowater", { notes });
      console.log(res.data);
      setInfoNote(formatAiBase(res.data));
      setLoading({ start: false, done: true });
    }
  };
  useEffect(() => {
    if (window) {
      window.innerWidth >= 700 && setFlagKill(true);
    }
  }, []);
  return (
    <motion.section
      style={{ y: translateY }}
      className=" mt-[100px] max-md:mt-[10px] gap-x-20 grid-cols-subgrid max-md:flex max-md:flex-col max-md:items-center grid col-start-1 col-end-13">
      <div className="col-start-4 max-md:w-1/1 max-md:p-5 col-end-10 h-112.5 max-md:col-start-2 max-md:col-end-6">
        <label htmlFor="notes">
          {" "}
          <textarea
            disabled={notes.length >= 300}
            onChange={(e) => setNotes(e.target.value)}
            value={notes}
            name="notes"
            placeholder="Write text..."
            className=" rounded-t-[50px] w-1/1 h-1/2 resize-none mt-[200px] bg-[#f2efef] outline-0 p-10 "></textarea>
        </label>
        {loading.start && !loading.done && (
          <Loader className="animate-spin text-white" />
        )}
        {!loading.start && loading.done && infoNote && (
          <InfoText info={infoNote} />
        )}{" "}
        <p
          className={`text-gray-400 text-end ${
            notes.length >= 300 ? "text-red-400" : "text-gray-400"
          }`}>
          {notes.length}{" "}
          {notes.length >= 300 && (
            <span className="text-red-500 cursor-pointer">
              more with subscribe +
            </span>
          )}
        </p>
        <button
          disabled={patternDisabled}
          onClick={sendNotes}
          className={`w-1/1 h-[50px] transition-all  flex items-center justify-center  rounded-b-[50px] ${
            patternDisabled
              ? "bg-gray-500 opacity-50"
              : " bg-primary cursor-pointer hover:opacity-50"
          }`}>
          {loading.start && !loading.done ? (
            <Loader className="animate-spin text-white" />
          ) : (
            <Send className="text-white " />
          )}
        </button>
      </div>

      {flagKill && (
        <div className="col-span-3">
          <h2 className="text-[36px] text-primary">
            {writehere.map((char, i) => (
              <motion.span
                className="inline-block"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  type: "spring",
                  delay: 0.1 * i,
                }}
                key={i}>
                {char == " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </h2>
          <Image src="/Arrow.svg" alt="arrow" width={100} height={100} />
        </div>
      )}
    </motion.section>
  );
}
