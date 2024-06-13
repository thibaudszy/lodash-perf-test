import { describe, it } from 'node:test';
import assert from 'assert';
import drop from 'lodash-es-with-subpaths/drop';

describe('drop', () => {
    it('should be of the expected type', () => {
        assert.strictEqual(typeof drop, 'function');
    });
});