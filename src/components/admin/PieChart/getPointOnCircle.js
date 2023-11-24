const degreesInCircle = 360

const degreesToRadians = (degrees) =>
  degrees * (Math.PI / (degreesInCircle / 2))

export const getPointOnCircle = (radius, cutoutRadius, angleInDegrees) => {
  const angleInRadians = degreesToRadians(angleInDegrees - 90)
  return {
    x: radius + cutoutRadius * Math.cos(angleInRadians),
    y: radius + cutoutRadius * Math.sin(angleInRadians)
  }
}