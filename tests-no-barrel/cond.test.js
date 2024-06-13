import { describe, it } from 'node:test';
import assert from 'assert';
import cond from 'lodash-es-with-subpaths/cond';

describe('cond', () => {
    it('should work as expected', () => {
        assert.strictEqual(typeof cond, function);
    });
});