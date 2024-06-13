import { describe, it } from 'node:test';
import assert from 'assert';
import uniqWith from 'lodash-es-with-subpaths/uniqWith';

describe('uniqWith', () => {
    it('should work as expected', () => {
        assert.strictEqual(typeof uniqWith, function);
    });
});