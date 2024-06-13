import { describe, it } from 'node:test';
import assert from 'assert';
import { gte } from 'lodash-es';

describe('gte', () => {
    it('should work as expected', () => {
        assert.strictEqual(typeof gte, 'function');
    });
});