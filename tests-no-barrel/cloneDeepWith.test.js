import { describe, it } from 'node:test';
import assert from 'assert';
import cloneDeepWith from 'lodash-es-with-subpaths/cloneDeepWith';

describe('cloneDeepWith', () => {
    it('should work as expected', () => {
        assert.strictEqual(typeof cloneDeepWith, function);
    });
});