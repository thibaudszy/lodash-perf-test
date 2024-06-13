import { describe, it } from 'node:test';
import assert from 'assert';
import intersectionWith from 'lodash-es-with-subpaths/intersectionWith';

describe('intersectionWith', () => {
    it('should work as expected', () => {
        assert.strictEqual(typeof intersectionWith, function);
    });
});