import { describe, it } from 'node:test';
import assert from 'assert';
import reject from 'lodash-es-with-subpaths/reject';

describe('reject', () => {
    it('should be of the expected type', () => {
        assert.strictEqual(typeof reject, 'function');
    });
});