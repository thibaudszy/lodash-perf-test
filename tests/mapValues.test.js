import { describe, it } from 'node:test';
import assert from 'assert';
import { mapValues } from 'lodash-es';

describe('mapValues', () => {
    it('should work as expected', () => {
        assert.strictEqual(typeof mapValues, 'function');
    });
});