import { describe, it } from 'node:test';
import assert from 'assert';
import { mapKeys } from 'lodash-es';

describe('mapKeys', () => {
    it('should be of the expected type', () => {
        assert.strictEqual(typeof mapKeys, 'function');
    });
});