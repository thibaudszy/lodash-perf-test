import { describe, it } from 'node:test';
import assert from 'assert';
import { difference } from 'lodash-es';

describe('difference', () => {
    it('should work as expected', () => {
        assert.strictEqual(typeof difference, 'function');
    });
});