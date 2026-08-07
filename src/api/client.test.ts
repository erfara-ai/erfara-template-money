import { describe, expect, it } from "vitest";
import { getGoal, listGoals } from "./client";

describe("listGoals", () => {
  it("stops at the limit and still reports the true total", async () => {
    const page = await listGoals(2);
    expect(page.items).toHaveLength(2);
    expect(page.total).toBeGreaterThan(2);
  });
});

describe("getGoal", () => {
  it("answers null for an id that is not there", async () => {
    expect(await getGoal("nope")).toBeNull();
  });
});
