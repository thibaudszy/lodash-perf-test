import { describe, it } from 'node:test';
import assert from 'assert';
import { truncate } from 'lodash-es';

describe('truncate', () => {
    it('should work as expected', () => {
        assert.strictEqual(typeof truncate, 'function');
    });
});