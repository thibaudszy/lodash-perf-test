import { describe, it } from 'node:test';
import assert from 'assert';
import isArray from 'lodash-es-with-subpaths/isArray';

describe('isArray', () => {
    it('should work as expected', () => {
        assert.strictEqual(typeof isArray, function);
    });
});