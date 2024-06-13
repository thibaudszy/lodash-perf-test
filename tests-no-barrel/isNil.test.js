import { describe, it } from 'node:test';
import assert from 'assert';
import isNil from 'lodash-es-with-subpaths/isNil';

describe('isNil', () => {
    it('should work as expected', () => {
        assert.strictEqual(typeof isNil, function);
    });
});