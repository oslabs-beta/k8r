/** @type {import('ts-jest').JestConfigWithTsJest} */
export default {
  clearMocks: true,
  coverageProvider: "v8",
  moduleFileExtensions: ["js", "jsx", "ts", "tsx", "json", "node"],
  roots: ["<rootDir>"],
  testMatch: ["**/__test__/**/*.[jt]s?(x)", "**/?(*.)+(spec|test).[tj]s?(x)"],
  transform: { "^.+\\.(ts|tsx)$": "ts-jest" }
};