import { describe, it } from 'node:test';
import assert from 'assert';
import { intersectionBy } from 'lodash-es';

describe('intersectionBy', () => {
    it('should be of the expected type', () => {
        assert.strictEqual(typeof intersectionBy, 'function');
    });
});