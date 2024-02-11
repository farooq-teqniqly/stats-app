import { SampleSummary } from "../ttest/ttest";

const standardError = (sampleSummary: SampleSummary): number => {
  return sampleSummary.standardDeviation / Math.sqrt(sampleSummary.cardinality);
};

const df = (cardinality: number): number => {
  return cardinality - 1;
};

const totalError = (error1: number, error2: number): number => {
  const power = 2;
  return Math.sqrt(Math.pow(error1, power) + Math.pow(error2, power));
};

const tObserved = (mean1: number, mean2: number, error: number): number => {
  return (mean1 - mean2) / error;
};

export { standardError, df, totalError, tObserved };
