export function getOrganScale(progress: number, phase: number) {
  const expansion = progress / 100
  return 32 + expansion * 32 + Math.sin(phase * Math.PI) * 24
}
