import { describe, it } from 'node:test';
import assert from 'assert';
import isFinite from 'lodash-es-with-subpaths/isFinite';

describe('isFinite', () => {
    it('should work as expected', () => {
        assert.strictEqual(typeof isFinite, function);
    });
});