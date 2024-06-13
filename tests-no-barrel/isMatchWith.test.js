import { describe, it } from 'node:test';
import assert from 'assert';
import isMatchWith from 'lodash-es-with-subpaths/isMatchWith';

describe('isMatchWith', () => {
    it('should be of the expected type', () => {
        assert.strictEqual(typeof isMatchWith, 'function');
    });
});