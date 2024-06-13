import { describe, it } from 'node:test';
import assert from 'assert';
import flatten from 'lodash-es-with-subpaths/flatten';

describe('flatten', () => {
    it('should work as expected', () => {
        assert.strictEqual(typeof flatten, function);
    });
});