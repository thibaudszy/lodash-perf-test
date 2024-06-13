import { describe, it } from 'node:test';
import assert from 'assert';
import sortedIndexBy from 'lodash-es-with-subpaths/sortedIndexBy';

describe('sortedIndexBy', () => {
    it('should work as expected', () => {
        assert.strictEqual(typeof sortedIndexBy, function);
    });
});