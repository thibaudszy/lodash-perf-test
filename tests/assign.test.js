import { describe, it } from 'node:test';
import assert from 'assert';
import { assign } from 'lodash-es';

describe('assign', () => {
    it('should work as expected', () => {
        assert.strictEqual(typeof assign, 'function');
    });
});