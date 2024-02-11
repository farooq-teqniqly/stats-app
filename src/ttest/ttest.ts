import { df, standardError, tObserved, totalError } from "../common/calculator";

type SampleSummary = {
  name: string;
  cardinality: number;
  mean: number;
  standardDeviation: number;
};

type TTestResult = {
  t: {
    observed: number;
  };
  groups: Record<string, { error: number; df: number }>;
  error: number;
  df: number;
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
    groups: {
      [sampleSummary1.name]: {
        error: errors[0],
        df: degreesOfFreedom[0],
      },
      [sampleSummary2.name]: {
        error: errors[1],
        df: degreesOfFreedom[1],
      },
    },
    error: te,
    df: totalDegreesOfFreedom,
  };
};

export { SampleSummary, independentSamplesTTest, TTestResult };
