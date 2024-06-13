import { describe, it } from 'node:test';
import assert from 'assert';
import isBoolean from 'lodash-es-with-subpaths/isBoolean';

describe('isBoolean', () => {
    it('should be of the expected type', () => {
        assert.strictEqual(typeof isBoolean, 'function');
    });
});