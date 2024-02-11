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

export { standardError, df, totalError, tObserved };
