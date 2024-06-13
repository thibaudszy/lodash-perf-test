import { describe, it } from 'node:test';
import assert from 'assert';
import { matches } from 'lodash-es';

describe('matches', () => {
    it('should work as expected', () => {
        assert.strictEqual(typeof matches, function);
    });
});