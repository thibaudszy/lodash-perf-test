import { describe, it } from 'node:test';
import assert from 'assert';
import toFinite from 'lodash-es-with-subpaths/toFinite';

describe('toFinite', () => {
    it('should be of the expected type', () => {
        assert.strictEqual(typeof toFinite, 'function');
    });
});