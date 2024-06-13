import { describe, it } from 'node:test';
import assert from 'assert';
import { flattenDepth } from 'lodash-es';

describe('flattenDepth', () => {
    it('should be of the expected type', () => {
        assert.strictEqual(typeof flattenDepth, 'function');
    });
});