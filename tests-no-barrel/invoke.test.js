import { describe, it } from 'node:test';
import assert from 'assert';
import invoke from 'lodash-es-with-subpaths/invoke';

describe('invoke', () => {
    it('should work as expected', () => {
        assert.strictEqual(typeof invoke, function);
    });
});