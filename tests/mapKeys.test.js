import { describe, it } from 'node:test';
import assert from 'assert';
import { mapKeys } from 'lodash-es';

describe('mapKeys', () => {
    it('should work as expected', () => {
        assert.strictEqual(typeof mapKeys, 'function');
    });
});