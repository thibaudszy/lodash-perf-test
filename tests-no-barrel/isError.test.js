import { describe, it } from 'node:test';
import assert from 'assert';
import isError from 'lodash-es-with-subpaths/isError';

describe('isError', () => {
    it('should work as expected', () => {
        assert.strictEqual(typeof isError, function);
    });
});