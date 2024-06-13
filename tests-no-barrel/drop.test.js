import { describe, it } from 'node:test';
import assert from 'assert';
import drop from 'lodash-es-with-subpaths/drop';

describe('drop', () => {
    it('should work as expected', () => {
        assert.strictEqual(typeof drop, function);
    });
});