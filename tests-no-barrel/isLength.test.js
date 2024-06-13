import { describe, it } from 'node:test';
import assert from 'assert';
import isLength from 'lodash-es-with-subpaths/isLength';

describe('isLength', () => {
    it('should be of the expected type', () => {
        assert.strictEqual(typeof isLength, 'function');
    });
});