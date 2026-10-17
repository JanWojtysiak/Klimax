export function spruceRow(
  baseline: number,
  from: number,
  to: number,
  step: number,
  minHeight: number,
  maxHeight: number,
  seed: number,
) {
  const parts: string[] = [];
  let state = seed;
  for (let x = from; x < to; x += step) {
    state = (state * 1103515245 + 12345) % 2147483648;
    const height = minHeight + (state / 2147483648) * (maxHeight - minHeight);
    const width = step * 0.72;
    parts.push(
      `M${x - width / 2},${baseline} L${x},${baseline - height} L${x + width / 2},${baseline} Z`,
    );
  }
  return parts.join(" ");
}
