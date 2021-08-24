module.exports = {
  "testEnvironment": "node",
  transform: {
      '^.+\\.ts$': 'ts-jest',
  },
  "moduleNameMapper": {
    '^#api/(.*)$': '<rootDir>/src/api/$1',
    '^#libs/(.*)$': '<rootDir>/src/libs/$1',
    '^#calc/(.*)$': '<rootDir>/src/modules/calc/$1',
    '^#tools/(.*)$': '<rootDir>/src/modules/tools/$1'
  },
  "maxWorkers": 1
};
