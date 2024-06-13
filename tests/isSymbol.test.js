import { describe, it } from 'node:test';
import assert from 'assert';
import { isSymbol } from 'lodash-es';

describe('isSymbol', () => {
    it('should work as expected', () => {
        assert.strictEqual(typeof isSymbol, 'function');
    });
});