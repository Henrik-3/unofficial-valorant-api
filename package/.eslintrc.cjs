// eslint-disable-next-line no-undef
module.exports = {
    env: {
        browser: true,
        es2021: true
    },
    extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended"
    ],
    overrides: [
    ],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module"
    },
    plugins: [
        "@typescript-eslint"
    ],
    ignorePatterns: [
        "**/*.js",
        "**/*.d.ts"
    ],
    rules: {
        indent: [
            "error",
            4
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        quotes: [
            "error",
            "double"
        ],
        semi: "off",
        "@typescript-eslint/semi": ["error", "never"],
        "@typescript-eslint/member-delimiter-style": [
            "error",
            {
                multiline: {
                    delimiter: "none",
                    requireLast: false
                },
                singleline: {
                    delimiter: "comma",
                    requireLast: false
                }
            }
        ],
        "quote-props": [
            "warn",
            "as-needed"
        ],
        "@typescript-eslint/no-explicit-any": [
            "off"
        ]
    }
}
