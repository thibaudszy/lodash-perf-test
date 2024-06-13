import { describe, it } from 'node:test';
import assert from 'assert';
import sortedLastIndexBy from 'lodash-es-with-subpaths/sortedLastIndexBy';

describe('sortedLastIndexBy', () => {
    it('should work as expected', () => {
        assert.strictEqual(typeof sortedLastIndexBy, function);
    });
});