interface Circle {
  x: number
  y: number
  color: string
}

interface Props {
  circles?: Circle[]
  width?: number
  height?: number
  circleRadius?: number
  yValues?: number[]
}

export default ({
  circles,
  width = window.innerWidth * 0.9,
  height = window.innerHeight * 0.5,
  circleRadius = 3
}: Props) => {
  if (!circles) return <>Rellena los circulo del componente</>
  if (circles.length < 2) return <>Esperamos dos valores...</>

  const linePoints = circles
    .map((circle) => `${circle.x},${circle.y}`)
    .join(" ")

  return (
    <svg width={width} height={height}>
      <rect
        width={width}
        height={height}
        // stroke="black"
        fill="none"
      />

      {circles.length > 0 && (
        <>
          {circles.map((circle, index) => (
            <circle
              key={index}
              cx={circle.x}
              cy={circle.y}
              r={circleRadius}
              fill={circle.color}
            />
          ))}

          <path
            d={`M ${linePoints}`}
            fill="none"
            stroke="green"
            strokeWidth="1"
          />
        </>
      )}
    </svg>
  )
}
