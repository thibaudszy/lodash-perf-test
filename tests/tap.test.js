import { describe, it } from 'node:test';
import assert from 'assert';
import { tap } from 'lodash-es';

describe('tap', () => {
    it('should work as expected', () => {
        assert.strictEqual(typeof tap, 'function');
    });
});