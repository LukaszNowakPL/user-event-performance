module.exports = {
    reporters: [
        'default',
    ],

    projects: [
        {
            displayName: 'integration',
            testEnvironment: 'jest-environment-jsdom-sixteen',
            testMatch: [
                "<rootDir>test/integration/**/*.test.{ts,tsx}",
            ],
            restoreMocks: true,
            clearMocks: true,
            setupFilesAfterEnv: ['./test/setupJestDom.ts'],
            moduleNameMapper: {
                '\\css$': 'identity-obj-proxy',
            },
        },
    ],
};