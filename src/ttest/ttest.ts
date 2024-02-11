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
  const df1 = df(sampleSummary1.cardinality);
  const df2 = df(sampleSummary2.cardinality);
  const error1 = standardError(sampleSummary1);
  const error2 = standardError(sampleSummary2);
  const te = totalError(error1, error2);

  return {
    t: {
      observed: tObserved(sampleSummary1.mean, sampleSummary2.mean, te),
    },
    groups: {
      [sampleSummary1.name]: {
        error: error1,
        df: df1,
      },
      [sampleSummary2.name]: {
        error: error2,
        df: df2,
      },
    },
    error: te,
    df: df1 + df2,
  };
};

export { SampleSummary, independentSamplesTTest, TTestResult };
