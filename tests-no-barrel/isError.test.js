import { describe, it } from 'node:test';
import assert from 'assert';
import isError from 'lodash-es-with-subpaths/isError';

describe('isError', () => {
    it('should be of the expected type', () => {
        assert.strictEqual(typeof isError, 'function');
    });
});