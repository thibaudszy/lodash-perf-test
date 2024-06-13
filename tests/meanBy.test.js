import { describe, it } from 'node:test';
import assert from 'assert';
import { meanBy } from 'lodash-es';

describe('meanBy', () => {
    it('should work as expected', () => {
        assert.strictEqual(typeof meanBy, 'function');
    });
});