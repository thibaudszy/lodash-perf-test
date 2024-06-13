import { describe, it } from 'node:test';
import assert from 'assert';
import { transform } from 'lodash-es';

describe('transform', () => {
    it('should work as expected', () => {
        assert.strictEqual(typeof transform, 'function');
    });
});