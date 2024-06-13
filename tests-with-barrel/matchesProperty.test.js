import { describe, it } from 'node:test';
import assert from 'assert';
import { matchesProperty } from 'lodash-es';

describe('matchesProperty', () => {
    it('should be of the expected type', () => {
        assert.strictEqual(typeof matchesProperty, 'function');
    });
});