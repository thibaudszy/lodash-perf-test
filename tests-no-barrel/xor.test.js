import { describe, it } from 'node:test';
import assert from 'assert';
import xor from 'lodash-es-with-subpaths/xor';

describe('xor', () => {
    it('should be of the expected type', () => {
        assert.strictEqual(typeof xor, 'function');
    });
});