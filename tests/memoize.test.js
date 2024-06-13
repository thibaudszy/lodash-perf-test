import { describe, it } from 'node:test';
import assert from 'assert';
import { memoize } from 'lodash-es';

describe('memoize', () => {
    it('should work as expected', () => {
        assert.strictEqual(typeof memoize, 'function');
    });
});