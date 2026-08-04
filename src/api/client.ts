import type { Page, Goal } from "./types";
import raw from "../data/goals.json";

/**
 * The data layer.
 *
 * There is no server yet — this app deploys as static files to GitHub Pages,
 * so the "API" reads a JSON file that ships with the build. It is shaped like
 * a network call on purpose: when a real endpoint lands, only this file
 * changes and nothing that calls it has to.
 */
export async function listGoals(limit: number): Promise<Page<Goal>> {
  const all = raw as Goal[];
  return { items: all.slice(0, limit), total: all.length };
}

export async function getGoal(id: string): Promise<Goal | null> {
  const all = raw as Goal[];
  return all.find((r) => r.id === id) ?? null;
}
