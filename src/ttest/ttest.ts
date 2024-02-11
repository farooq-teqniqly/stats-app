import { df, standardError, tObserved, totalError } from "../common/calculator";
import { SampleSummary } from "../common/types";

type TTestResult = {
  t: {
    observed: number;
  };
  groups: { error: number; df: number; summary: SampleSummary }[];
  error: number;
  df: number;
};

const confidenceInterval = (
  testResult: TTestResult,
  tCritical: number
): number[] => {
  const diff =
    testResult.groups[0].summary.mean - testResult.groups[1].summary.mean;

  const multiplier = testResult.t.observed * tCritical;

  if (diff < 0) {
    return [diff + multiplier, diff - multiplier];
  }

  return [diff - multiplier, diff + multiplier];
};

const independentSamplesTTest = (
  sampleSummary1: SampleSummary,
  sampleSummary2: SampleSummary
): TTestResult => {
  const degreesOfFreedom = [
    df(sampleSummary1.cardinality),
    df(sampleSummary2.cardinality),
  ];

  const totalDegreesOfFreedom = degreesOfFreedom.reduce(
    (sum, df) => sum + df,
    0
  );

  const errors = [
    standardError(sampleSummary1.standardDeviation, sampleSummary1.cardinality),
    standardError(sampleSummary2.standardDeviation, sampleSummary2.cardinality),
  ];

  const te = totalError(...errors);

  return {
    t: {
      observed: tObserved(sampleSummary1.mean, sampleSummary2.mean, te),
    },
    groups: [
      {
        error: errors[0],
        df: degreesOfFreedom[0],
        summary: sampleSummary1,
      },
      {
        error: errors[1],
        df: degreesOfFreedom[1],
        summary: sampleSummary2,
      },
    ],
    error: te,
    df: totalDegreesOfFreedom,
  };
};

export {
  SampleSummary,
  independentSamplesTTest,
  TTestResult,
  confidenceInterval,
};
