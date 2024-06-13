import { describe, it } from 'node:test';
import assert from 'assert';
import sortedUniqBy from 'lodash-es-with-subpaths/sortedUniqBy';

describe('sortedUniqBy', () => {
    it('should be of the expected type', () => {
        assert.strictEqual(typeof sortedUniqBy, 'function');
    });
});