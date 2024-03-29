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
        'max-lines-per-function': ['warn', { max: 150, skipComments: true }],
        'max-params': ['warn', 5],
        'max-statements': ['warn', 50], // in an async/await world this can get high
        'new-cap': ['error', { capIsNewExceptions: ['Given', 'When', 'Then', 'Before', 'After'] }],
        'newline-after-var': ['error', 'always'],
        'newline-before-return': 'error',
        'no-await-in-loop': 'warn',
        'no-bitwise': 'error',
        'no-multiple-empty-lines': ['error', { max: 1 }],
        'no-param-reassign': ['error', { props: false }],
        'no-underscore-dangle': ['off'],
        // Override base rule to remove 'ForOfStatement'
        'no-restricted-syntax': [
            'error',
            {
                selector: 'ForInStatement',
                message: 'for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.',
            },
            {
                selector: 'LabeledStatement',
                message: 'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.',
            },
            {
                selector: 'WithStatement',
                message: '`with` is disallowed in strict mode because it makes code impossible to predict and optimize.',
            },
        ],
        'prefer-destructuring': 'warn',
        'prefer-rest-params': 'off',
        'prefer-spread': 'off',
        'prefer-object-spread': 'warn',
        'prettier/prettier': [
            'error',
            {
                singleQuote: true,
                tabWidth: 4,
                printWidth: 120,
                trailingComma: "none",
                arrowParens: "avoid"
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
