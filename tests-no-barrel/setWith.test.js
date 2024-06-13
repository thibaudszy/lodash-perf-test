import { describe, it } from 'node:test';
import assert from 'assert';
import setWith from 'lodash-es-with-subpaths/setWith';

describe('setWith', () => {
    it('should be of the expected type', () => {
        assert.strictEqual(typeof setWith, 'function');
    });
});