import { describe, it } from 'node:test';
import assert from 'assert';
import after from 'lodash-es-with-subpaths/after';

describe('after', () => {
    it('should be of the expected type', () => {
        assert.strictEqual(typeof after, 'function');
    });
});