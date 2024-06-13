import { describe, it } from 'node:test';
import assert from 'assert';
import isUndefined from 'lodash-es-with-subpaths/isUndefined';

describe('isUndefined', () => {
    it('should be of the expected type', () => {
        assert.strictEqual(typeof isUndefined, 'function');
    });
});