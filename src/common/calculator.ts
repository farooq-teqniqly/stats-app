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

const sumOfSquares = (
  values: number[],
  valueTransformer?: (value: number) => number
): number => {
  const power = 2;
  return values.reduce(
    (sum, value) =>
      sum +
      (valueTransformer
        ? Math.pow(valueTransformer(value), power)
        : Math.pow(value, power)),
    0
  );
};

const totalError = (errors: number[]): number =>
  Math.sqrt(sumOfSquares(errors));

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
  return Math.sqrt(sumOfSquares(values, (v: number) => v - mean) / cardinality);
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

const sumOfSquaresFromStandardDeviation = (
  standardDeviation: number,
  cardinality: number
): number => Math.pow(standardDeviation, 2) * (cardinality - 1);

export {
  standardError,
  df,
  totalError,
  tObserved,
  createSampleSummary,
  sumOfSquaresFromStandardDeviation,
};
