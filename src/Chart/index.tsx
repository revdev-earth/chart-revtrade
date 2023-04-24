import Grafica from "./Grafica";
import useCircles from "./useCircles";
import useSize from "./useSize";

interface Chart {
  circleRadius?: number;
  height?: number;
  width?: number;
  yValues?: number[];
}

export default ({
  height: _height = window.innerHeight * 0.5,
  width: _width = window.innerWidth * 0.5,
  yValues,
}: Chart) => {
  const { height, width } = useSize({ width: _width, height: _height });
  const circles = useCircles({ width, height, yValues });

  return <Grafica height={height} width={width} circles={circles} />;
};
