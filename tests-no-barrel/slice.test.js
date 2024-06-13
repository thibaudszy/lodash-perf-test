import { describe, it } from 'node:test';
import assert from 'assert';
import slice from 'lodash-es-with-subpaths/slice';

describe('slice', () => {
    it('should be of the expected type', () => {
        assert.strictEqual(typeof slice, 'function');
    });
});