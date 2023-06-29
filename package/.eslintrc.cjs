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
        indent: "off",
        "@typescript-eslint/indent": [
            "error",
            4
        ],
        quotes: [
            "error",
            "double"
        ],
        semi: "off",
        "@typescript-eslint/semi": ["error", "always"],
        "@typescript-eslint/member-delimiter-style": [
            "error",
            {
                multiline: {
                    delimiter: "semi",
                    requireLast: true
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
        ],
        "eol-last": [
            "error",
            "always"
        ]
    }
};
