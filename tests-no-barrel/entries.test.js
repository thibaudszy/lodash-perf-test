import { describe, it } from 'node:test';
import assert from 'assert';
import entries from 'lodash-es-with-subpaths/entries';

describe('entries', () => {
    it('should work as expected', () => {
        assert.strictEqual(typeof entries, function);
    });
});