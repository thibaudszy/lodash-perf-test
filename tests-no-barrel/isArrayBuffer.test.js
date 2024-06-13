import { describe, it } from 'node:test';
import assert from 'assert';
import isArrayBuffer from 'lodash-es-with-subpaths/isArrayBuffer';

describe('isArrayBuffer', () => {
    it('should work as expected', () => {
        assert.strictEqual(typeof isArrayBuffer, function);
    });
});