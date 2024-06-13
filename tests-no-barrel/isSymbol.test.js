import { describe, it } from 'node:test';
import assert from 'assert';
import isSymbol from 'lodash-es-with-subpaths/isSymbol';

describe('isSymbol', () => {
    it('should be of the expected type', () => {
        assert.strictEqual(typeof isSymbol, 'function');
    });
});