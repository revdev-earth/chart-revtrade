interface Props {
  width?: number
  height?: number
  yValues?: number[]
}

export default ({
  height = window.innerHeight * 0.5,
  width = window.innerWidth * 0.5,
  yValues = [
    5000, 4000, 3000, 4500, 3500, 5000, 4000, 3000, 4500, 3500, 5000, 4000,
    3000, 4500, 3500
  ]
}: Props) => {
  const color = "green"

  const max = Math.max(...yValues)
  const min = Math.min(...yValues)

  const numCircles = yValues.length

  const margen = 25

  const circleSpacing = (width - margen * 2) / (numCircles - 1)

  const newCircles = yValues.map((y, i) => {
    const valorRelativo = y - min
    const rangoDeValores = max - min
    const valorNormalizado = valorRelativo / rangoDeValores

    const heightDeseado = height - margen * 2
    const newY = valorNormalizado * heightDeseado + margen

    const x = i * circleSpacing + margen

    return {
      x,
      y: newY,
      color
    }
  })

  return newCircles
}
