const nextJest = require('next/jest')

const createJestConfig = nextJest({
    // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
    dir: './'
})

// Add any custom config to be passed to Jest
/** @type {import('jest').Config} */
const customJestConfig = {
    // Add more setup options before each test is run
    // setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
    // if using TypeScript with a baseUrl set to the root directory then you need the below for alias' to work
    moduleDirectories: ['node_modules', '<rootDir>/'],
    setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
    moduleNameMapper: {
        '^@/components/(.*)$': '<rootDir>/components/$1',
        '^@/views/(.*)$': '<rootDir>/views/$1',
        '^@/hooks$': '<rootDir>/hooks/index',
        '^@/constants$': '<rootDir>/constants/index',
        '^@/utilities$': '<rootDir>/utilities/index',
        '^@/utilities/(.*)$': '<rootDir>/utilities/$1',
        '^@/config$': '<rootDir>/config/index',
        '^@/__mocks__$': '<rootDir>/__mocks__/index'
    },
    testEnvironment: 'jest-environment-jsdom'
}

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(customJestConfig)
