import { describe, it } from 'node:test';
import assert from 'assert';
import { isFunction } from 'lodash-es';

describe('isFunction', () => {
    it('should be of the expected type', () => {
        assert.strictEqual(typeof isFunction, 'function');
    });
});