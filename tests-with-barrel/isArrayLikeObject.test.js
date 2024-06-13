import { describe, it } from 'node:test';
import assert from 'assert';
import { isArrayLikeObject } from 'lodash-es';

describe('isArrayLikeObject', () => {
    it('should be of the expected type', () => {
        assert.strictEqual(typeof isArrayLikeObject, 'function');
    });
});