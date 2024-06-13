import { describe, it } from 'node:test';
import assert from 'assert';
import isObject from 'lodash-es-with-subpaths/isObject';

describe('isObject', () => {
    it('should be of the expected type', () => {
        assert.strictEqual(typeof isObject, 'function');
    });
});