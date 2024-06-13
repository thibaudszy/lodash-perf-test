import { describe, it } from 'node:test';
import assert from 'assert';
import flattenDepth from 'lodash-es-with-subpaths/flattenDepth';

describe('flattenDepth', () => {
    it('should work as expected', () => {
        assert.strictEqual(typeof flattenDepth, function);
    });
});