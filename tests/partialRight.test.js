import { describe, it } from 'node:test';
import assert from 'assert';
import { partialRight } from 'lodash-es';

describe('partialRight', () => {
    it('should work as expected', () => {
        assert.strictEqual(typeof partialRight, 'function');
    });
});