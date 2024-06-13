import { describe, it } from 'node:test';
import assert from 'assert';
import { stubArray } from 'lodash-es';

describe('stubArray', () => {
    it('should work as expected', () => {
        assert.strictEqual(typeof stubArray, 'function');
    });
});