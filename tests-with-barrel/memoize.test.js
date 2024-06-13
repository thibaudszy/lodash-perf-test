import { describe, it } from 'node:test';
import assert from 'assert';
import { memoize } from 'lodash-es';

describe('memoize', () => {
    it('should be of the expected type', () => {
        assert.strictEqual(typeof memoize, 'function');
    });
});