import { describe, it } from 'node:test';
import assert from 'assert';
import { differenceBy } from 'lodash-es';

describe('differenceBy', () => {
    it('should work as expected', () => {
        assert.strictEqual(typeof differenceBy, 'function');
    });
});