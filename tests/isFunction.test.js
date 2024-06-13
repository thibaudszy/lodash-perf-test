import { describe, it } from 'node:test';
import assert from 'assert';
import { isFunction } from 'lodash-es';

describe('isFunction', () => {
    it('should work as expected', () => {
        assert.strictEqual(typeof isFunction, 'function');
    });
});