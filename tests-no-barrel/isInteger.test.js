import { describe, it } from 'node:test';
import assert from 'assert';
import isInteger from 'lodash-es-with-subpaths/isInteger';

describe('isInteger', () => {
    it('should be of the expected type', () => {
        assert.strictEqual(typeof isInteger, 'function');
    });
});