'use strict';

module.exports = {
    extends: 'airbnb-base',
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
        indent: ['error', 4],
        'max-len': ['error', { code: 100, ignoreComments: true }],
        'new-cap': ['error', { capIsNewExceptions: ['Given', 'When', 'Then', 'Before', 'After'] }],
        'newline-after-var': ['error', 'always'],
        'newline-before-return': 'error',
        'no-bitwise': 'error',
        'no-multiple-empty-lines': ['error', { max: 1 }],
        'no-param-reassign': ['error', { props: false }],
        'prefer-rest-params': 'off',
        'prefer-spread': 'off',
        'require-jsdoc': ['error', {
            require: {
                FunctionDeclaration: true,
                MethodDefinition: false,
                ClassDeclaration: false
            }
        }],
        strict: ['error', 'safe'],
        'import/no-extraneous-dependencies': ['error', {
            devDependencies: true,
            optionalDependencies: false,
            peerDependencies: false
        }],
        'import/newline-after-import': ['off']
    }
};
