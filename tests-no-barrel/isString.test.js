import { describe, it } from 'node:test';
import assert from 'assert';
import isString from 'lodash-es-with-subpaths/isString';

describe('isString', () => {
    it('should be of the expected type', () => {
        assert.strictEqual(typeof isString, 'function');
    });
});