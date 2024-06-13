import { describe, it } from 'node:test';
import assert from 'assert';
import { sortedLastIndexBy } from 'lodash-es';

describe('sortedLastIndexBy', () => {
    it('should be of the expected type', () => {
        assert.strictEqual(typeof sortedLastIndexBy, 'function');
    });
});