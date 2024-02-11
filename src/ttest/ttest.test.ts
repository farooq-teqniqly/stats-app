import { SampleSummary, TTestResult, independentSamplesTTest } from "./ttest";

describe("Independent samples t-test using descriptive statistics", () => {
  const sampleSummmary1: SampleSummary = {
    name: "women",
    cardinality: 25,
    mean: 6,
    standardDeviation: 4,
  };

  const sampleSummmary2: SampleSummary = {
    name: "men",
    cardinality: 25,
    mean: 7,
    standardDeviation: 3,
  };

  const testResult = independentSamplesTTest(sampleSummmary1, sampleSummmary2);

  it("has the observed t value", () => {
    expect(testResult.t.observed).toBe(1);
  });

  it("has the groups' standard errors", () => {
    expect(testResult.groups[sampleSummmary1.name].error).toBe(0.8);
    expect(testResult.groups[sampleSummmary2.name].error).toBe(0.6);
  });
});
