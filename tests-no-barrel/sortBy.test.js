import { describe, it } from 'node:test';
import assert from 'assert';
import sortBy from 'lodash-es-with-subpaths/sortBy';

describe('sortBy', () => {
    it('should be of the expected type', () => {
        assert.strictEqual(typeof sortBy, 'function');
    });
});