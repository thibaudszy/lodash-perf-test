import { describe, it } from 'node:test';
import assert from 'assert';
import { conforms } from 'lodash-es';

describe('conforms', () => {
    it('should work as expected', () => {
        assert.strictEqual(typeof conforms, function);
    });
});