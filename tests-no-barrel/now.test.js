import { describe, it } from 'node:test';
import assert from 'assert';
import now from 'lodash-es-with-subpaths/now';

describe('now', () => {
    it('should work as expected', () => {
        assert.strictEqual(typeof now, function);
    });
});