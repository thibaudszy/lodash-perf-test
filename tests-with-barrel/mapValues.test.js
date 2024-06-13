import { describe, it } from 'node:test';
import assert from 'assert';
import { mapValues } from 'lodash-es';

describe('mapValues', () => {
    it('should be of the expected type', () => {
        assert.strictEqual(typeof mapValues, 'function');
    });
});