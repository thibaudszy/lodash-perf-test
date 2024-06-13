import { describe, it } from 'node:test';
import assert from 'assert';
import { sortedUniq } from 'lodash-es';

describe('sortedUniq', () => {
    it('should work as expected', () => {
        assert.strictEqual(typeof sortedUniq, 'function');
    });
});