export default {
  preset: 'ts-jest',
  testEnvironment: 'jest-environment-jsdom',
  transform: {
      "^.+\\.tsx?$": "ts-jest",
      '^.+\\.vue$': '@vue/vue3-jest'
  // process `*.tsx` files with `ts-jest`
  },
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
      "^@vue/test-utils": "<rootDir>/node_modules/@vue/test-utils/dist/vue-test-utils.cjs.js",
      "~src/(.*)": "<rootDir>/src/$1"
  },
  moduleFileExtensions: [
    'js',
    'ts',
    'json',
    'vue'
  ]
}