import { describe, it } from 'node:test';
import assert from 'assert';
import { mixin } from 'lodash-es';

describe('mixin', () => {
    it('should work as expected', () => {
        assert.strictEqual(typeof mixin, 'function');
    });
});