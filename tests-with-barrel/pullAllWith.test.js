import { describe, it } from 'node:test';
import assert from 'assert';
import { pullAllWith } from 'lodash-es';

describe('pullAllWith', () => {
    it('should be of the expected type', () => {
        assert.strictEqual(typeof pullAllWith, 'function');
    });
});