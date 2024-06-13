import { describe, it } from 'node:test';
import assert from 'assert';
import isPlainObject from 'lodash-es-with-subpaths/isPlainObject';

describe('isPlainObject', () => {
    it('should be of the expected type', () => {
        assert.strictEqual(typeof isPlainObject, 'function');
    });
});