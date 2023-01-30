/** @type {import('ts-jest').JestConfigWithTsJest} */
export default {
  clearMocks: true,
  coverageProvider: "v8",
  collectCoverage: true,
  collectCoverageFrom: ['./client/**', './server/**'],
  coverageThreshold: {
    global: {
      lines: 80
    }
  },
  moduleFileExtensions: ["js", "jsx", "ts", "tsx", "json", "node"],
  coverageDirectory: "<rootDir>/__tests__/reports",
  roots: ["<rootDir>"],
  testMatch: ["**/__test__/**/*.[jt]s?(x)", "**/?(*.)+(spec|test).[tj]s?(x)"],
  transform: { "^.+\\.(ts|tsx)$": "ts-jest" }
};