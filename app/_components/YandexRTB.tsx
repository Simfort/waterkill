// components/YandexRTB.js
"use client";
import { useEffect } from "react";

const YandexRTB = ({
  blockId,
  containerId,
}: {
  blockId: string;
  containerId: string;
}) => {
  useEffect(() => {
    if (typeof window.Ya?.Context?.AdvManager?.render === "function") {
      window.yaContextCb.push(() => {
        window.Ya.Context.AdvManager.render({
          blockId: blockId,
          renderTo: containerId,
        });
      });
    } else {
      console.error("Яндекс RTB не загружен");
    }
  }, [blockId, containerId]);

  return <div id={containerId} />;
};

export default YandexRTB;
