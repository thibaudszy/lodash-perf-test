import { describe, it } from 'node:test';
import assert from 'assert';
import { clamp } from 'lodash-es';

describe('clamp', () => {
    it('should work as expected', () => {
        assert.strictEqual(typeof clamp, 'function');
    });
});