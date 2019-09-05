'use strict';

const { assert } = require('chai');
const config = require('../index');

describe('index test', () => {
    it('has rules', () => {
        assert.isDefined(config.rules);
    });

    it('extends airbnb and plugin:prettier/recommended', () => {
        assert.include(config.extends, 'airbnb-base');
        assert.include(config.extends, 'plugin:prettier/recommended');
    });
});
