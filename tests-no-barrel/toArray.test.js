import { describe, it } from 'node:test';
import assert from 'assert';
import toArray from 'lodash-es-with-subpaths/toArray';

describe('toArray', () => {
    it('should work as expected', () => {
        assert.strictEqual(typeof toArray, function);
    });
});