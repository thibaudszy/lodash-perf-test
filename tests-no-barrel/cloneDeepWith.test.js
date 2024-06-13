import { describe, it } from 'node:test';
import assert from 'assert';
import cloneDeepWith from 'lodash-es-with-subpaths/cloneDeepWith';

describe('cloneDeepWith', () => {
    it('should be of the expected type', () => {
        assert.strictEqual(typeof cloneDeepWith, 'function');
    });
});