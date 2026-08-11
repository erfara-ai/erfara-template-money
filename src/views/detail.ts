import type { Goal } from "../api/types";
import { formatSavedCents, targetCentsBand } from "../lib/format";

export function renderDetail(row: Goal): HTMLElement {
  const box = document.createElement("section");
  box.className = "detail";

  const h = document.createElement("h2");
  h.textContent = row.title;

  const p = document.createElement("p");
  p.className = "detail-meta";
  p.textContent = `${row.category} · ${row.targetCents} target (${targetCentsBand(row.targetCents)}) · ${formatSavedCents(row.savedCents)}`;

  box.append(h, p);
  return box;
}
