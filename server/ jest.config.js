


export default {
    testEnvironment: 'node',                     // Ideal for Node.js server tests
    setupFiles: ['dotenv/config'],               // Loads .env variables before tests
    transform: {},                               // No transform needed since you're using plain JS + ES Modules
    verbose: true,                               // Shows detailed test output
    testMatch: ['**/__tests__/**/*.test.js'],    // Looks in __tests__/ folders for *.test.js files
  };