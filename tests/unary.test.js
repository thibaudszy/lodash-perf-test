import { describe, it } from 'node:test';
import assert from 'assert';
import { unary } from 'lodash-es';

describe('unary', () => {
    it('should work as expected', () => {
        assert.strictEqual(typeof unary, 'function');
    });
});