import { describe, it } from 'node:test';
import assert from 'assert';
import { xor } from 'lodash-es';

describe('xor', () => {
    it('should work as expected', () => {
        assert.strictEqual(typeof xor, 'function');
    });
});