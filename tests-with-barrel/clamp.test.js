import { describe, it } from 'node:test';
import assert from 'assert';
import { clamp } from 'lodash-es';

describe('clamp', () => {
    it('should be of the expected type', () => {
        assert.strictEqual(typeof clamp, 'function');
    });
});