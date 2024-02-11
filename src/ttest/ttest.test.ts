import { SampleSummary, TTestResult, independentSamplesTTest } from "./ttest";

describe("Independent samples t-test using summary statistics", () => {
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
    expect(testResult.t.observed).toBe(-1);
  });

  it("has the groups' standard errors", () => {
    expect(testResult.groups[sampleSummmary1.name].error).toBe(0.8);
    expect(testResult.groups[sampleSummmary2.name].error).toBe(0.6);
  });

  it("has the groups' degrees of freedom", () => {
    expect(testResult.groups[sampleSummmary1.name].df).toBe(24);
    expect(testResult.groups[sampleSummmary2.name].df).toBe(24);
  });

  it("has the standard error of the difference between means", () => {
    expect(testResult.error).toBe(1);
  });

  it("has the total degrees of freedom", () => {
    expect(testResult.df).toBe(48);
  });
});
