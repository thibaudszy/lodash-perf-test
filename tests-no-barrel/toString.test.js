import { describe, it } from 'node:test';
import assert from 'assert';
import toString from 'lodash-es-with-subpaths/toString';

describe('toString', () => {
    it('should work as expected', () => {
        assert.strictEqual(typeof toString, function);
    });
});