import { memo } from "react"
import Grafica from "./Grafica"
import create_y_positions from "./create_y_positions"

interface Chart {
  height?: number // window.innerHeight * 0.5,
  width?: number // window.innerWidth * 0.5,
  yValues?: number[] // [ 5000, 4000, 3000, 4500, 3500, 5000, 4000, 3000, 4500, 3500, 5000, 4000, 3000, 4500, 3500 ]
}

export default memo(
  ({
    height = window.innerHeight * 0.5,
    width = window.innerWidth * 0.85,
    yValues
  }: Chart) => {
    const circles = create_y_positions({ width, height, yValues })

    return <Grafica height={height} width={width} circles={circles} />
  }
)
