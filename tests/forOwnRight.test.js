import { describe, it } from 'node:test';
import assert from 'assert';
import { forOwnRight } from 'lodash-es';

describe('forOwnRight', () => {
    it('should work as expected', () => {
        assert.strictEqual(typeof forOwnRight, 'function');
    });
});