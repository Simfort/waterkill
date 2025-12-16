"use client";
import { useState, useEffect } from "react";

export default function useWindowWidth() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    // Очистка при удалении компонента
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return width;
}
