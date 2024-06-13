import { describe, it } from 'node:test';
import assert from 'assert';
import isObject from 'lodash-es-with-subpaths/isObject';

describe('isObject', () => {
    it('should work as expected', () => {
        assert.strictEqual(typeof isObject, function);
    });
});