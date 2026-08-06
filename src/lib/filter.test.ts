import { describe, expect, it } from "vitest";
import { byTag, sortByTargetCents } from "./filter";
import type { Goal } from "../api/types";

const row = (id: string, targetCents: number, tags: string[]): Goal => ({
  id,
  title: id,
  targetCents,
  savedCents: 12000,
  category: "transport",
  tags,
});

describe("byTag", () => {
  it("keeps only the rows carrying the tag", () => {
    const rows = [row("a", 50000, ["keep"]), row("b", 500000, ["other"])];
    expect(byTag(rows, "keep").map((r) => r.id)).toEqual(["a"]);
  });
});

describe("sortByTargetCents", () => {
  it("puts the lowest first", () => {
    const rows = [row("high", 500000, []), row("low", 50000, [])];
    expect(sortByTargetCents(rows).map((r) => r.id)).toEqual(["low", "high"]);
  });
  it("does not modify the array it was given", () => {
    const rows = [row("high", 500000, []), row("low", 50000, [])];
    sortByTargetCents(rows);
    expect(rows.map((r) => r.id)).toEqual(["high", "low"]);
  });
});
