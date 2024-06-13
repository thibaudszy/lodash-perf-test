import { describe, it } from 'node:test';
import assert from 'assert';
import now from 'lodash-es-with-subpaths/now';

describe('now', () => {
    it('should be of the expected type', () => {
        assert.strictEqual(typeof now, 'function');
    });
});