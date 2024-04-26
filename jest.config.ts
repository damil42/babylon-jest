import { JestConfigWithTsJest } from 'ts-jest';

export default {
  preset: "ts-jest/presets/default-esm",
  extensionsToTreatAsEsm: [".ts"],
  testEnvironment: 'jsdom',
} as JestConfigWithTsJest;
