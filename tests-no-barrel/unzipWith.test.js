import { describe, it } from 'node:test';
import assert from 'assert';
import unzipWith from 'lodash-es-with-subpaths/unzipWith';

describe('unzipWith', () => {
    it('should work as expected', () => {
        assert.strictEqual(typeof unzipWith, function);
    });
});