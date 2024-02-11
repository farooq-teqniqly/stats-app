import { SampleSummary } from "../ttest/ttest";

const standardError = (sampleSummary: SampleSummary): number => {
  return sampleSummary.standardDeviation / Math.sqrt(sampleSummary.cardinality);
};

export { standardError };
