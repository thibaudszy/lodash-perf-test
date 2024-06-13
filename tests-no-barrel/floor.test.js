import { describe, it } from 'node:test';
import assert from 'assert';
import floor from 'lodash-es-with-subpaths/floor';

describe('floor', () => {
    it('should be of the expected type', () => {
        assert.strictEqual(typeof floor, 'function');
    });
});