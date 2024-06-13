import { describe, it } from 'node:test';
import assert from 'assert';
import sortBy from 'lodash-es-with-subpaths/sortBy';

describe('sortBy', () => {
    it('should work as expected', () => {
        assert.strictEqual(typeof sortBy, function);
    });
});