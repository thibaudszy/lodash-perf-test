import { describe, it } from 'node:test';
import assert from 'assert';
import { sortedLastIndexOf } from 'lodash-es';

describe('sortedLastIndexOf', () => {
    it('should work as expected', () => {
        assert.strictEqual(typeof sortedLastIndexOf, 'function');
    });
});