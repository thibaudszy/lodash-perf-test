import { describe, it } from 'node:test';
import assert from 'assert';
import { matchesProperty } from 'lodash-es';

describe('matchesProperty', () => {
    it('should work as expected', () => {
        assert.strictEqual(typeof matchesProperty, function);
    });
});