import { describe, it } from 'node:test';
import assert from 'assert';
import { sortedLastIndexOf } from 'lodash-es';

describe('sortedLastIndexOf', () => {
    it('should be of the expected type', () => {
        assert.strictEqual(typeof sortedLastIndexOf, 'function');
    });
});