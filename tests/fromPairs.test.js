import { describe, it } from 'node:test';
import assert from 'assert';
import { fromPairs } from 'lodash-es';

describe('fromPairs', () => {
    it('should work as expected', () => {
        assert.strictEqual(typeof fromPairs, 'function');
    });
});