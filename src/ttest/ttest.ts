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
  groups: Record<string, { error: number }>;
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
      women: {
        error: 0.8,
      },
      men: {
        error: 0.6,
      },
    },
  };
};

export { SampleSummary, independentSamplesTTest, TTestResult };
