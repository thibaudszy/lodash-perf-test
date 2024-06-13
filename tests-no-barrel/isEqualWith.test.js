import { describe, it } from 'node:test';
import assert from 'assert';
import isEqualWith from 'lodash-es-with-subpaths/isEqualWith';

describe('isEqualWith', () => {
    it('should work as expected', () => {
        assert.strictEqual(typeof isEqualWith, function);
    });
});