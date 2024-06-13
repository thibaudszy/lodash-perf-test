import { describe, it } from 'node:test';
import assert from 'assert';
import { update } from 'lodash-es';

describe('update', () => {
    it('should work as expected', () => {
        assert.strictEqual(typeof update, function);
    });
});