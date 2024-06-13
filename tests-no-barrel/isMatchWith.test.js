import { describe, it } from 'node:test';
import assert from 'assert';
import isMatchWith from 'lodash-es-with-subpaths/isMatchWith';

describe('isMatchWith', () => {
    it('should work as expected', () => {
        assert.strictEqual(typeof isMatchWith, function);
    });
});