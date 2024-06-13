import { describe, it } from 'node:test';
import assert from 'assert';
import xorBy from 'lodash-es-with-subpaths/xorBy';

describe('xorBy', () => {
    it('should work as expected', () => {
        assert.strictEqual(typeof xorBy, function);
    });
});