"use client";
import { Loader, Send } from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";
import { useEffect, useState } from "react";
import axios from "axios";
import { formatAiBase, InfoTextBase } from "@/lib/utils";
import InfoText from "./InfoText";

export default function Textarea() {
  const writehere = `Пиши тут`.split("");
  const [notes, setNotes] = useState("");
  const [flagKill, setFlagKill] = useState(false);
  const [loading, setLoading] = useState({ start: false, done: false });

  const [infoNote, setInfoNote] = useState<InfoTextBase | undefined>(undefined);
  const patternDisabled = (loading.start && !loading.done) || notes.length == 0;
  const sendNotes = async () => {
    setLoading({ start: true, done: false });
    const res = await axios.post("/api/nowater", { notes });
    console.log(res.data);
    setInfoNote(formatAiBase(res.data));
    setLoading({ start: false, done: true });
  };
  useEffect(() => {
    if (window) {
      window.innerWidth >= 700 && setFlagKill(true);
    }
  }, []);
  return (
    <section
      className="mt-[100px] max-md:mt-[10px] gap-x-20 grid grid-cols-subgrid col-start-1 col-span-full min-h-fit"
      style={{ gridAutoRows: "auto" }}>
      <div className="col-start-4 max-md:col-start-1 max-md:p-5 col-end-10 max-md:col-end-12 overflow-hidden">
        <label htmlFor="notes">
          <textarea
            disabled={notes.length >= 5000}
            onChange={(e) => setNotes(e.target.value)}
            value={notes}
            name="notes"
            placeholder="Пиши текст..."
            className="rounded-t-[50px] w-full min-h-[200px] max-h-[400px] resize-none mt-[200px] bg-[#f2efef] outline-0 p-10"></textarea>
        </label>
        {loading.start && !loading.done && (
          <Loader className="animate-spin text-white" />
        )}
        {!loading.start && loading.done && infoNote && (
          <InfoText info={infoNote} />
        )}
        <p
          className={`text-gray-400 text-end ${
            notes.length >= 5000 ? "text-red-400" : "text-gray-400"
          }`}>
          {notes.length}{" "}
          {notes.length >= 5000 && (
            <span className="text-red-500 cursor-pointer">это максимум</span>
          )}
        </p>
        <button
          disabled={patternDisabled}
          onClick={sendNotes}
          className={`w-full h-[50px] transition-all flex items-center justify-center rounded-b-[50px] ${
            patternDisabled
              ? "bg-gray-500 opacity-50"
              : "bg-primary cursor-pointer hover:opacity-50"
          }`}>
          {loading.start && !loading.done ? (
            <Loader className="animate-spin text-white" />
          ) : (
            <Send className="text-white" />
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
                transition={{ type: "spring", delay: 0.1 * i }}
                key={i}>
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </h2>
          <Image src="/Arrow.svg" alt="arrow" width={100} height={100} />
        </div>
      )}
    </section>
  );
}
