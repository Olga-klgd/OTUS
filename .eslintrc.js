module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "jest/globals": true,
        "node": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:jest/recommended"
    ],
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "jest"
    ],
    "rules": {
    },
    "ignorePatterns": [".eslintrc.js", "babel.config.js", "jest.config.js"]
}
