import { describe, it } from 'node:test';
import assert from 'assert';
import values from 'lodash-es-with-subpaths/values';

describe('values', () => {
    it('should be of the expected type', () => {
        assert.strictEqual(typeof values, 'function');
    });
});