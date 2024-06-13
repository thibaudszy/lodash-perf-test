import { describe, it } from 'node:test';
import assert from 'assert';
import sortedIndexBy from 'lodash-es-with-subpaths/sortedIndexBy';

describe('sortedIndexBy', () => {
    it('should be of the expected type', () => {
        assert.strictEqual(typeof sortedIndexBy, 'function');
    });
});