import { describe, it } from 'node:test';
import assert from 'assert';
import { reduce } from 'lodash-es';

describe('reduce', () => {
    it('should work as expected', () => {
        assert.strictEqual(typeof reduce, function);
    });
});