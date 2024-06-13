import { describe, it } from 'node:test';
import assert from 'assert';
import { pad } from 'lodash-es';

describe('pad', () => {
    it('should work as expected', () => {
        assert.strictEqual(typeof pad, 'function');
    });
});