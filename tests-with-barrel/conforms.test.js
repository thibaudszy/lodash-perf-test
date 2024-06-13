import { describe, it } from 'node:test';
import assert from 'assert';
import { conforms } from 'lodash-es';

describe('conforms', () => {
    it('should be of the expected type', () => {
        assert.strictEqual(typeof conforms, 'function');
    });
});