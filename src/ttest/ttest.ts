type SampleSummary = {
  cardinality: number;
  mean: number;
  standardDeviation: number;
};

type TTestResult = {
  t: {
    observed: number;
  };
};

const independentSamplesTTest = (
  sampleSummary1: SampleSummary,
  sampleSummary2: SampleSummary
): TTestResult => {
  return {
    t: {
      observed: 1,
    },
  };
};

export { SampleSummary, independentSamplesTTest, TTestResult };
