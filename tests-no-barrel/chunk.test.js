import { describe, it } from 'node:test';
import assert from 'assert';
import chunk from 'lodash-es-with-subpaths/chunk';

describe('chunk', () => {
    it('should be of the expected type', () => {
        assert.strictEqual(typeof chunk, 'function');
    });
});