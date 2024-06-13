import { describe, it } from 'node:test';
import assert from 'assert';
import { intersectionBy } from 'lodash-es';

describe('intersectionBy', () => {
    it('should work as expected', () => {
        assert.strictEqual(typeof intersectionBy, 'function');
    });
});