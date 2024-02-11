import { createSampleSummary } from "../common/calculator";
import { confidenceInterval, independentSamplesTTest } from "../ttest/ttest";

const womenValues = [
  9.2, 7.7, 11.9, 6.2, 9.0, 8.4, 6.9, 7.6, 7.4, 8.0, 9.9, 6.7, 8.4, 9.3, 9.1,
  8.7, 9.2, 9.1, 8.4, 9.6, 7.7, 9.0, 9.0, 8.4,
];

const menValues = [
  10.4, 8.9, 11.7, 12.0, 8.7, 9.4, 9.8, 9.0, 9.2, 9.7, 9.1, 8.8, 7.9, 9.9, 10.0,
  10.1, 9.0, 11.4, 8.7, 9.6, 9.2, 9.7, 8.9, 9.2, 9.4, 9.7, 8.9, 9.3, 10.4, 11.9,
  9.0, 12.0, 9.6, 9.2, 9.9, 9.0,
];

const [menSummary, womenSummary] = [
  createSampleSummary(womenValues, "women"),
  createSampleSummary(menValues, "men"),
];

const testResult = independentSamplesTTest(menSummary, womenSummary);

console.log(testResult);

const ci = confidenceInterval(testResult, 2);

console.log(ci);
