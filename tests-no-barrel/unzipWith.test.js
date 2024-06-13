import { describe, it } from 'node:test';
import assert from 'assert';
import unzipWith from 'lodash-es-with-subpaths/unzipWith';

describe('unzipWith', () => {
    it('should be of the expected type', () => {
        assert.strictEqual(typeof unzipWith, 'function');
    });
});