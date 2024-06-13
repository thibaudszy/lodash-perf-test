import { describe, it } from 'node:test';
import assert from 'assert';
import { isLength } from 'lodash-es';

describe('isLength', () => {
    it('should work as expected', () => {
        assert.strictEqual(typeof isLength, 'function');
    });
});