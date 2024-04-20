import { JestConfigWithTsJest } from 'ts-jest';

export default {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  // transformIgnorePatterns: [
  //   "/node_modules/(?!@babylonjs/core)/"
  // ],
} as JestConfigWithTsJest;
