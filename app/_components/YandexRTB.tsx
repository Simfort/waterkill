"use client";

import { useEffect } from "react";

interface YaContext {
  Context?: {
    AdvManager?: {
      render: (params: { blockId: string; renderTo: string }) => void;
    };
  };
}

declare global {
  interface Window {
    yaContextCb?: (() => void)[];
    Ya?: YaContext;
  }
}

const YandexRTB = ({
  blockId,
  containerId,
}: {
  blockId: string;
  containerId: string;
}) => {
  useEffect(() => {
    // 1. Проверка окружения (клиент/сервер)
    if (typeof window === "undefined") return;

    // 2. Проверка наличия Ya.Context.AdvManager.render
    const isYaReady = (): boolean => {
      return (
        !!window.Ya &&
        !!window.Ya.Context &&
        !!window.Ya.Context.AdvManager &&
        typeof window.Ya.Context.AdvManager.render === "function"
      );
    };

    if (isYaReady()) {
      // 3. Добавляем вызов рендера в очередь
      window.yaContextCb?.push(() => {
        window.Ya?.Context?.AdvManager?.render({
          blockId: blockId,
          renderTo: containerId,
        });
      });
    } else {
      console.warn("Яндекс RTB не загружен. Проверьте подключение context.js");
    }
  }, [blockId, containerId]);

  return <div id={containerId} />;
};

export default YandexRTB;
