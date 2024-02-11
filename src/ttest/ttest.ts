import { df, standardError } from "../common/calculator";

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
  const df1 = df(sampleSummary1);
  const df2 = df(sampleSummary2);

  return {
    t: {
      observed: 1,
    },
    groups: {
      [sampleSummary1.name]: {
        error: standardError(sampleSummary1),
        df: df1,
      },
      [sampleSummary2.name]: {
        error: standardError(sampleSummary2),
        df: df2,
      },
    },
    error: 1,
    df: df1 + df2,
  };
};

export { SampleSummary, independentSamplesTTest, TTestResult };
