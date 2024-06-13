import { describe, it } from 'node:test';
import assert from 'assert';
import xorWith from 'lodash-es-with-subpaths/xorWith';

describe('xorWith', () => {
    it('should be of the expected type', () => {
        assert.strictEqual(typeof xorWith, 'function');
    });
});