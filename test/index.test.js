'use strict';

const { assert } = require('chai');
const config = require('../index');

describe('index test', () => {
    it('has rules', () => {
        assert.isDefined(config.rules);
    });

    it('extends airbnb', () => {
        assert.equal(config.extends, 'airbnb-base');
    });
});
