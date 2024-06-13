import { describe, it } from 'node:test';
import assert from 'assert';
import isNative from 'lodash-es-with-subpaths/isNative';

describe('isNative', () => {
    it('should work as expected', () => {
        assert.strictEqual(typeof isNative, function);
    });
});