import { describe, it } from 'node:test';
import assert from 'assert';
import { isPlainObject } from 'lodash-es';

describe('isPlainObject', () => {
    it('should work as expected', () => {
        assert.strictEqual(typeof isPlainObject, 'function');
    });
});