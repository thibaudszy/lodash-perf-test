import { describe, it } from 'node:test';
import assert from 'assert';
import sortedIndex from 'lodash-es-with-subpaths/sortedIndex';

describe('sortedIndex', () => {
    it('should be of the expected type', () => {
        assert.strictEqual(typeof sortedIndex, 'function');
    });
});