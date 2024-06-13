import { describe, it } from 'node:test';
import assert from 'assert';
import reject from 'lodash-es-with-subpaths/reject';

describe('reject', () => {
    it('should work as expected', () => {
        assert.strictEqual(typeof reject, function);
    });
});