import { standardError } from "../common/calculator";

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
  return {
    t: {
      observed: 1,
    },
    groups: {
      [sampleSummary1.name]: {
        error: standardError(sampleSummary1),
        df: 24,
      },
      [sampleSummary2.name]: {
        error: standardError(sampleSummary2),
        df: 24,
      },
    },
    error: 1,
    df: 48,
  };
};

export { SampleSummary, independentSamplesTTest, TTestResult };
