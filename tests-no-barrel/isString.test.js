import { describe, it } from 'node:test';
import assert from 'assert';
import isString from 'lodash-es-with-subpaths/isString';

describe('isString', () => {
    it('should work as expected', () => {
        assert.strictEqual(typeof isString, function);
    });
});