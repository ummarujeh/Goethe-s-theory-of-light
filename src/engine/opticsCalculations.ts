export interface EdgeSpectrumParameters {
  aperture: number
  density: number
  distance: number
}

export function calculateOverlap({ aperture, density, distance }: EdgeSpectrumParameters) {
  return 100 - Math.abs(aperture - 50) * 0.9 - distance * 0.12 - density * 0.03
}
