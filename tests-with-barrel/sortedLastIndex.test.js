import { describe, it } from 'node:test';
import assert from 'assert';
import { sortedLastIndex } from 'lodash-es';

describe('sortedLastIndex', () => {
    it('should be of the expected type', () => {
        assert.strictEqual(typeof sortedLastIndex, 'function');
    });
});