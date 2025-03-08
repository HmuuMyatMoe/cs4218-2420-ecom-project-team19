export default {
  // display name
  displayName: "backend",

  // when testing backend
  testEnvironment: "node",

  // which test to run
  testMatch: ["<rootDir>/(helpers|middlewares|controllers)/**.test.js"],

  // jest code coverage
  collectCoverage: true,
  collectCoverageFrom: ["<rootDir>/(helpers|middlewares|controllers)/**.js"],
  coverageThreshold: {
    global: {
      lines: 100,
      functions: 100,
    },
  },
};
