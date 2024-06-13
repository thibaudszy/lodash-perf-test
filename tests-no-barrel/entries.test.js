import { describe, it } from 'node:test';
import assert from 'assert';
import entries from 'lodash-es-with-subpaths/entries';

describe('entries', () => {
    it('should be of the expected type', () => {
        assert.strictEqual(typeof entries, 'function');
    });
});