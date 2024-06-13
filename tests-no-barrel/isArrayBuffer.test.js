import { describe, it } from 'node:test';
import assert from 'assert';
import isArrayBuffer from 'lodash-es-with-subpaths/isArrayBuffer';

describe('isArrayBuffer', () => {
    it('should be of the expected type', () => {
        assert.strictEqual(typeof isArrayBuffer, 'function');
    });
});