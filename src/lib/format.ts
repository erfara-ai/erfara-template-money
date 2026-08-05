/** The raw savedCents in, the words people actually use out. */
export function formatSavedCents(value: number): string {
  if (!Number.isFinite(value) || value < 0) return "—";
  return `${Math.round(value / 100)} saved`;
}

/** The label people actually use, from the raw targetCents. */
export function targetCentsBand(value: number): "small" | "medium" | "large" {
  if (value < 50000) return "small";
  if (value < 500000) return "medium";
  return "large";
}
