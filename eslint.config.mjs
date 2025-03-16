import { FlatCompat } from "@eslint/eslintrc"

const compat = new FlatCompat({
    // import.meta.dirname is available after Node.js v20.11.0
    baseDirectory: import.meta.dirname,
    recommendedConfig: true,
})
const eslintConfig = [
    ...compat.config({
        extends: [
            "next/core-web-vitals",
            "next/typescript",
            "plugin:prettier/recommended",
        ],
        rules: {
            "prefer-const": 1,
            "no-empty-function": ["error", { allow: ["constructors", "arrowFunctions"] }],
            "no-unsafe-optional-chaining": 1,
            "no-promise-executor-return": 1,
            "no-empty": ["error", { allowEmptyCatch: true }],
            "no-param-reassign": ["error", { props: false }],
            "import/extensions": ["error", "always", {
                js: "never",
                jsx: "never",
                ts: "never",
                tsx: "never",
            }],
            "import/no-extraneous-dependencies": ["error", { devDependencies: true }],
            "import/prefer-default-export": ["off"],
            "prefer-template": ["error"],
            "no-new": ["off"],
            "no-plusplus": ["off"],
            "no-shadow": ["off"],
        },
        ignorePatterns: [
            ".next",
            ".vscode",
            "node_modules",
            "dist",
            "build",
            "public",
            "package.json",
            "package-lock.json",
            "tsconfig.json",
            "eslint.config.mjs",
        ],
    }),
]
export default eslintConfig
