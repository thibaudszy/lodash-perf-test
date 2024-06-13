import { describe, it } from 'node:test';
import assert from 'assert';
import isEqualWith from 'lodash-es-with-subpaths/isEqualWith';

describe('isEqualWith', () => {
    it('should be of the expected type', () => {
        assert.strictEqual(typeof isEqualWith, 'function');
    });
});