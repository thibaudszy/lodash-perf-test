import { describe, it } from 'node:test';
import assert from 'assert';
import unary from 'lodash-es-with-subpaths/unary';

describe('unary', () => {
    it('should be of the expected type', () => {
        assert.strictEqual(typeof unary, 'function');
    });
});