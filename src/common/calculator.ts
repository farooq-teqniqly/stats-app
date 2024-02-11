import { SampleSummary } from "./types";

const standardError = (
  standardDeviation: number,
  cardinality: number
): number => {
  return standardDeviation / Math.sqrt(cardinality);
};

const df = (cardinality: number): number => {
  return cardinality - 1;
};

const totalError = (...errors: number[]): number => {
  const power = 2;
  const sumOfSquaredErrors = errors.reduce(
    (sum, error) => sum + Math.pow(error, power),
    0
  );
  return Math.sqrt(sumOfSquaredErrors);
};

const tObserved = (mean1: number, mean2: number, error: number): number => {
  return (mean1 - mean2) / error;
};

const mean = (values: number[], cardinality: number): number => {
  return values.reduce((sum, value) => sum + value) / cardinality;
};

const standardDeviation = (
  values: number[],
  mean: number,
  cardinality: number
): number => {
  const sumOfSquaredDifferences = values.reduce(
    (sum, value) => sum + Math.pow(value - mean, 2),
    0
  );

  return Math.sqrt(sumOfSquaredDifferences / cardinality);
};

const createSampleSummary = (values: number[], name: string): SampleSummary => {
  const cardinality = values.length;
  const sampleMean = mean(values, cardinality);
  const sampleStandardDeviation = standardDeviation(
    values,
    sampleMean,
    cardinality - 1
  );

  return {
    cardinality,
    mean: sampleMean,
    standardDeviation: sampleStandardDeviation,
    name,
  };
};

export { standardError, df, totalError, tObserved, createSampleSummary };
