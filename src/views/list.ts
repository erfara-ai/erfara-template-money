import type { Goal } from "../api/types";
import { formatSavedCents, targetCentsBand } from "../lib/format";

export function renderList(rows: Goal[], onPick: (id: string) => void): HTMLElement {
  const ul = document.createElement("ul");
  ul.className = "list";
  for (const r of rows) {
    const li = document.createElement("li");
    li.className = "row";
    li.dataset.band = targetCentsBand(r.targetCents);

    const title = document.createElement("button");
    title.className = "row-title";
    title.textContent = r.title;
    title.addEventListener("click", () => onPick(r.id));

    const meta = document.createElement("span");
    meta.className = "row-meta";
    meta.textContent = `${r.targetCents} target · ${formatSavedCents(r.savedCents)}`;

    li.append(title, meta);
    ul.append(li);
  }
  return ul;
}
