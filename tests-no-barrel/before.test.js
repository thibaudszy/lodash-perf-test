import { describe, it } from 'node:test';
import assert from 'assert';
import before from 'lodash-es-with-subpaths/before';

describe('before', () => {
    it('should work as expected', () => {
        assert.strictEqual(typeof before, function);
    });
});