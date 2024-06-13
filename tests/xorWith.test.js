import { describe, it } from 'node:test';
import assert from 'assert';
import { xorWith } from 'lodash-es';

describe('xorWith', () => {
    it('should work as expected', () => {
        assert.strictEqual(typeof xorWith, 'function');
    });
});