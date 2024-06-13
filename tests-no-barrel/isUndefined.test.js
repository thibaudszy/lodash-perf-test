import { describe, it } from 'node:test';
import assert from 'assert';
import isUndefined from 'lodash-es-with-subpaths/isUndefined';

describe('isUndefined', () => {
    it('should work as expected', () => {
        assert.strictEqual(typeof isUndefined, function);
    });
});