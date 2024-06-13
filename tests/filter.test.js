import { describe, it } from 'node:test';
import assert from 'assert';
import { filter } from 'lodash-es';

describe('filter', () => {
    it('should work as expected', () => {
        assert.strictEqual(typeof filter, 'function');
    });
});