module.exports = {
  projects: [
    {
      displayName: "dev",
      testEnvironment: "node",
      testMatch: ["<rootDir>/packages/remix-dev/**/*-test.[jt]s?(x)"]
    },
    {
      displayName: "node",
      testEnvironment: "node",
      testMatch: ["<rootDir>/packages/remix-node/**/*-test.[jt]s?(x)"],
      setupFiles: ["<rootDir>/jest/setupNodeGlobals.ts"]
    },
    {
      displayName: "server",
      testEnvironment: "node",
      testMatch: [
        "<rootDir>/packages/remix-server-runtime/**/*-test.[jt]s?(x)"
      ],
      setupFiles: ["<rootDir>/jest/setupNodeGlobals.ts"]
    },
    // Node Adapters
    {
      displayName: "architect",
      testEnvironment: "node",
      testMatch: ["<rootDir>/packages/remix-architect/**/*-test.[jt]s?(x)"]
    },
    {
      displayName: "azure",
      testEnvironment: "node",
      testMatch: ["<rootDir>/packages/remix-azure/**/*-test.[jt]s?(x)"]
    },
    {
      displayName: "express",
      testEnvironment: "node",
      testMatch: ["<rootDir>/packages/remix-express/**/*-test.[jt]s?(x)"],
      setupFiles: ["<rootDir>/jest/setupNodeGlobals.ts"]
    },
    {
      displayName: "vercel",
      testEnvironment: "node",
      testMatch: ["<rootDir>/packages/remix-vercel/**/*-test.[jt]s?(x)"],
      setupFiles: ["<rootDir>/jest/setupNodeGlobals.ts"]
    },
    // Fixture Apps
    {
      displayName: "gists-app",
      testEnvironment: "node",
      testMatch: ["<rootDir>/fixtures/gists-app/**/*-test.[jt]s?(x)"],
      globalSetup: "<rootDir>/fixtures/gists-app/jest/global-setup.js",
      globalTeardown: "<rootDir>/fixtures/gists-app/jest/global-teardown.js",
      setupFilesAfterEnv: ["<rootDir>/fixtures/gists-app/jest/setup.js"],
      setupFiles: ["<rootDir>/jest/setupNodeGlobals.ts"]
    }
  ]
};
