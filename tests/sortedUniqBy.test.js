import { describe, it } from 'node:test';
import assert from 'assert';
import { sortedUniqBy } from 'lodash-es';

describe('sortedUniqBy', () => {
    it('should work as expected', () => {
        assert.strictEqual(typeof sortedUniqBy, 'function');
    });
});