import { describe, it } from 'node:test';
import assert from 'assert';
import { isArrayLike } from 'lodash-es';

describe('isArrayLike', () => {
    it('should be of the expected type', () => {
        assert.strictEqual(typeof isArrayLike, 'function');
    });
});