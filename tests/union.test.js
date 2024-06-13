import { describe, it } from 'node:test';
import assert from 'assert';
import { union } from 'lodash-es';

describe('union', () => {
    it('should work as expected', () => {
        assert.strictEqual(typeof union, 'function');
    });
});