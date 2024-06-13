import { describe, it } from 'node:test';
import assert from 'assert';
import sortedUniqBy from 'lodash-es-with-subpaths/sortedUniqBy';

describe('sortedUniqBy', () => {
    it('should work as expected', () => {
        assert.strictEqual(typeof sortedUniqBy, function);
    });
});