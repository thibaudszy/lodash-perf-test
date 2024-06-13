import { describe, it } from 'node:test';
import assert from 'assert';
import memoize from 'lodash-es-with-subpaths/memoize';

describe('memoize', () => {
    it('should work as expected', () => {
        assert.strictEqual(typeof memoize, function);
    });
});