import { describe, it } from 'node:test';
import assert from 'assert';
import values from 'lodash-es-with-subpaths/values';

describe('values', () => {
    it('should work as expected', () => {
        assert.strictEqual(typeof values, function);
    });
});