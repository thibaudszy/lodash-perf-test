import { describe, it } from 'node:test';
import assert from 'assert';
import { range } from 'lodash-es';

describe('range', () => {
    it('should work as expected', () => {
        assert.strictEqual(typeof range, 'function');
    });
});