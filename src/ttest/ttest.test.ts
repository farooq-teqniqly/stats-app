import { SampleSummary, TTestResult, independentSamplesTTest } from "./ttest";

describe("Independent samples t-test using descriptive statistics", () => {
  const sampleSummmary1: SampleSummary = {
    cardinality: 25,
    mean: 7,
    standardDeviation: 3,
  };

  const sampleSummmary2: SampleSummary = {
    cardinality: 25,
    mean: 6,
    standardDeviation: 4,
  };

  let testResult: TTestResult;

  it("runs the test", () => {
    testResult = independentSamplesTTest(sampleSummmary1, sampleSummmary2);

    expect(testResult.t.observed).toBe(1);
  });
});
