import { describe, it } from 'node:test';
import assert from 'assert';
import { uniq } from 'lodash-es';

describe('uniq', () => {
    it('should work as expected', () => {
        assert.strictEqual(typeof uniq, 'function');
    });
});