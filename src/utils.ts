export function range(size: number, startAt = 0) {
  return Array(size).fill(0).map((_, ind) => ind + startAt);
}
