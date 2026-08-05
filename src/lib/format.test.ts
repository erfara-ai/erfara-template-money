import { describe, expect, it } from "vitest";
import { formatSavedCents, targetCentsBand } from "./format";

describe("formatSavedCents", () => {
  it("turns the raw value into the words people use", () => {
    expect(formatSavedCents(12000)).toBe("120 saved");
  });
  it("refuses nonsense rather than printing it", () => {
    expect(formatSavedCents(-1)).toBe("—");
    expect(formatSavedCents(Number.NaN)).toBe("—");
  });
});

describe("targetCentsBand", () => {
  it("labels the three bands", () => {
    expect(targetCentsBand(50000 - 1)).toBe("small");
    expect(targetCentsBand(50000)).toBe("medium");
    expect(targetCentsBand(500000)).toBe("large");
  });
});
