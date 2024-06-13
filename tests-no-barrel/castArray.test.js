import { describe, it } from 'node:test';
import assert from 'assert';
import castArray from 'lodash-es-with-subpaths/castArray';

describe('castArray', () => {
    it('should work as expected', () => {
        assert.strictEqual(typeof castArray, function);
    });
});