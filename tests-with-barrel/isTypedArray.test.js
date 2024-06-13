import { describe, it } from 'node:test';
import assert from 'assert';
import { isTypedArray } from 'lodash-es';

describe('isTypedArray', () => {
    it('should work as expected', () => {
        assert.strictEqual(typeof isTypedArray, function);
    });
});