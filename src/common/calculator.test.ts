import { createSampleSummary } from "./calculator";
import { SampleSummary } from "./types";

describe("summary statistics creation", () => {
  it("creates summary statistics from an array of values", () => {
    const values = [5, 4, 7, 9, 11, 15, 12];

    const { cardinality, mean, standardDeviation, name }: SampleSummary =
      createSampleSummary(values, "name");

    expect(cardinality).toBe(values.length);
    expect(mean).toBe(9);
    expect(standardDeviation).toBeCloseTo(3.958114029, 9);
    expect(name).toBe("name");
  });
});
