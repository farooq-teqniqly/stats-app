import {
  SampleSummary,
  confidenceInterval,
  independentSamplesTTest,
} from "./ttest";

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

describe("Independent samples t-test", () => {
  const testResult = independentSamplesTTest(sampleSummmary1, sampleSummmary2);

  it("has the observed t value", () => {
    expect(testResult.t.observed).toBe(-1);
  });

  it("has the groups' standard errors", () => {
    expect(testResult.groups[0].error).toBe(0.8);
    expect(testResult.groups[1].error).toBe(0.6);
  });

  it("has the groups' degrees of freedom", () => {
    expect(testResult.groups[0].df).toBe(24);
    expect(testResult.groups[1].df).toBe(24);
  });

  it("has the standard error of the difference between means", () => {
    expect(testResult.error).toBe(1);
  });

  it("has the total degrees of freedom", () => {
    expect(testResult.df).toBe(48);
  });

  it("has the name", () => {
    expect(testResult.groups[0].name).toBe(sampleSummmary1.name);
    expect(testResult.groups[1].name).toBe(sampleSummmary2.name);
  });

  it("has the sum of squares", () => {
    expect(testResult.groups[0].sumOfSquares).toBe(384);
    expect(testResult.groups[1].sumOfSquares).toBe(216);
  });
});

describe("confidence interval", () => {
  const testResult = independentSamplesTTest(sampleSummmary1, sampleSummmary2);

  it("calculates the confidence interval when difference is negative", () => {
    const tCritical = 2.021;
    const [lowerBound, upperBound] = confidenceInterval(testResult, tCritical);

    expect(lowerBound).toBe(-3.021);
    expect(upperBound).toBe(1.021);
  });

  it("calculates the confidence interval when difference is positive", () => {
    const testResult = independentSamplesTTest(
      sampleSummmary2,
      sampleSummmary1
    );
    const tCritical = 2.021;
    const [lowerBound, upperBound] = confidenceInterval(testResult, tCritical);

    expect(lowerBound).toBe(-1.021);
    expect(upperBound).toBe(3.021);
  });
});
