import { SampleSummary } from "../ttest/ttest";

const standardError = (sampleSummary: SampleSummary): number => {
  return sampleSummary.standardDeviation / Math.sqrt(sampleSummary.cardinality);
};

const df = (sampleSummary: SampleSummary): number => {
  return sampleSummary.cardinality - 1;
};

export { standardError, df };
