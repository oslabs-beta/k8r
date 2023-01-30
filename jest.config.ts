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
  transform: { "^.+\\.(ts|tsx)$": "ts-jest" },
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/__tests__/mocks/fileMock.js',
    '\\.(css|less)$': '<rootDir>/__tests__/mocks/fileMock.js',
  },
};