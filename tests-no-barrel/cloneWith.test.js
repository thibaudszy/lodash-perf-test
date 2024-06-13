import { describe, it } from 'node:test';
import assert from 'assert';
import cloneWith from 'lodash-es-with-subpaths/cloneWith';

describe('cloneWith', () => {
    it('should work as expected', () => {
        assert.strictEqual(typeof cloneWith, function);
    });
});