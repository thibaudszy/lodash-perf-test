import { describe, it } from 'node:test';
import assert from 'assert';
import { toFinite } from 'lodash-es';

describe('toFinite', () => {
    it('should work as expected', () => {
        assert.strictEqual(typeof toFinite, function);
    });
});