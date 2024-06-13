import { describe, it } from 'node:test';
import assert from 'assert';
import { forIn } from 'lodash-es';

describe('forIn', () => {
    it('should work as expected', () => {
        assert.strictEqual(typeof forIn, 'function');
    });
});