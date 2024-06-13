import { describe, it } from 'node:test';
import assert from 'assert';
import { isArrayLike } from 'lodash-es';

describe('isArrayLike', () => {
    it('should work as expected', () => {
        assert.strictEqual(typeof isArrayLike, function);
    });
});