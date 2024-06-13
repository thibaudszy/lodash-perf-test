import { describe, it } from 'node:test';
import assert from 'assert';
import isArrayLikeObject from 'lodash-es-with-subpaths/isArrayLikeObject';

describe('isArrayLikeObject', () => {
    it('should work as expected', () => {
        assert.strictEqual(typeof isArrayLikeObject, function);
    });
});