import { describe, it } from 'node:test';
import assert from 'assert';
import { sortedUniq } from 'lodash-es';

describe('sortedUniq', () => {
    it('should be of the expected type', () => {
        assert.strictEqual(typeof sortedUniq, 'function');
    });
});