import { describe, it } from 'node:test';
import assert from 'assert';
import isTypedArray from 'lodash-es-with-subpaths/isTypedArray';

describe('isTypedArray', () => {
    it('should be of the expected type', () => {
        assert.strictEqual(typeof isTypedArray, 'function');
    });
});