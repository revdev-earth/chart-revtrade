import { useState, useEffect, useCallback } from "react";

interface Props {
  height?: number;
  width?: number;
}

const Multiplicador = 0.5;

export default function useSize({
  height: _height = window.innerHeight * Multiplicador,
  width: _width = window.innerWidth * Multiplicador,
}: Props) {
  const [width, setWidth] = useState(_width);
  const [height, setHeight] = useState(_height);

  const resize = useCallback(() => {
    const handleResize = () => {
      setWidth(window.innerWidth * Multiplicador);
      setHeight(window.innerHeight * Multiplicador);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(resize, []);

  return { width, height };
}
