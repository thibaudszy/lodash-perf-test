import { describe, it } from 'node:test';
import assert from 'assert';
import pullAllWith from 'lodash-es-with-subpaths/pullAllWith';

describe('pullAllWith', () => {
    it('should work as expected', () => {
        assert.strictEqual(typeof pullAllWith, function);
    });
});