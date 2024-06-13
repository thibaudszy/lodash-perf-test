import { describe, it } from 'node:test';
import assert from 'assert';
import { toPairs } from 'lodash-es';

describe('toPairs', () => {
    it('should work as expected', () => {
        assert.strictEqual(typeof toPairs, function);
    });
});