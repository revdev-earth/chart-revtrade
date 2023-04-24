import { useState, useEffect, useCallback } from "react";

interface Props {
  height?: number;
  width?: number;
}

export default function useSize({
  height: _height = window.innerHeight * 0.5,
  width: _width = window.innerWidth * 0.5,
}: Props) {
  const [width, setWidth] = useState(_width);
  const [height, setHeight] = useState(_height);

  const resize = useCallback(() => {
    const handleResize = () => {
      setWidth(window.innerWidth * 0.9);
      setHeight(window.innerHeight * 0.5);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(resize, []);

  return { width, height };
}
