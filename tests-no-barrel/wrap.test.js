import { describe, it } from 'node:test';
import assert from 'assert';
import wrap from 'lodash-es-with-subpaths/wrap';

describe('wrap', () => {
    it('should work as expected', () => {
        assert.strictEqual(typeof wrap, function);
    });
});