import { describe, it } from 'node:test';
import assert from 'assert';
import without from 'lodash-es-with-subpaths/without';

describe('without', () => {
    it('should work as expected', () => {
        assert.strictEqual(typeof without, function);
    });
});