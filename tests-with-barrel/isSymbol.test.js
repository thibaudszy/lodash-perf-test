import { describe, it } from 'node:test';
import assert from 'assert';
import { isSymbol } from 'lodash-es';

describe('isSymbol', () => {
    it('should be of the expected type', () => {
        assert.strictEqual(typeof isSymbol, 'function');
    });
});