import type { Goal } from "../api/types";

/** Everything carrying this tag, in the order the data gave them. */
export function byTag(rows: Goal[], tag: string): Goal[] {
  return rows.filter((r) => r.tags.includes(tag));
}

/** Lowest targetCents first. Ties keep their original order. */
export function sortByTargetCents(rows: Goal[]): Goal[] {
  return [...rows].sort((a, b) => a.targetCents - b.targetCents);
}
