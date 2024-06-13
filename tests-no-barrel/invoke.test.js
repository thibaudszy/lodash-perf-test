import { describe, it } from 'node:test';
import assert from 'assert';
import invoke from 'lodash-es-with-subpaths/invoke';

describe('invoke', () => {
    it('should be of the expected type', () => {
        assert.strictEqual(typeof invoke, 'function');
    });
});