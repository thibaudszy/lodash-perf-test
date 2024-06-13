import { describe, it } from 'node:test';
import assert from 'assert';
import { sortedIndexOf } from 'lodash-es';

describe('sortedIndexOf', () => {
    it('should be of the expected type', () => {
        assert.strictEqual(typeof sortedIndexOf, 'function');
    });
});