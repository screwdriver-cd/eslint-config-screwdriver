'use strict';

module.exports = {
    extends: [
        'airbnb-base',
        'plugin:prettier/recommended' // last one wins
    ],
    env: {
        browser: true,
        es6: true,
        node: true,
        mocha: true
    },
    parserOptions: {
        sourceType: 'script'
    },
    rules: {
        'comma-dangle': ['error', 'never'],
        'class-methods-use-this': 'off',
        complexity: 'warn',
        eqeqeq: ['error', 'always'],
        'import/newline-after-import': ['off'],
        'import/no-extraneous-dependencies': [
            'error',
            {
                devDependencies: true,
                optionalDependencies: false,
                peerDependencies: false
            }
        ],
        indent: ['error', 4],
        'max-len': ['error', { code: 100, ignoreComments: true }],
        'max-lines-per-function': 'warn',
        'max-params': 'warn',
        'max-statements': 'warn',
        'new-cap': [
            'error',
            { capIsNewExceptions: ['Given', 'When', 'Then', 'Before', 'After'] }
        ],
        'newline-after-var': ['error', 'always'],
        'newline-before-return': 'error',
        'no-bitwise': 'error',
        'no-multiple-empty-lines': ['error', { max: 1 }],
        'no-param-reassign': ['error', { props: false }],
        'prefer-destructuring': 'warn',
        'prefer-rest-params': 'off',
        'prefer-spread': 'off',
        'prettier/prettier': [
            'error',
            {
                singleQuote: true,
                tabWidth: 4
            }
        ],
        'require-jsdoc': [
            'error',
            {
                require: {
                    FunctionDeclaration: true,
                    MethodDefinition: false,
                    ClassDeclaration: false
                }
            }
        ],
        strict: ['error', 'safe']
    }
};
