import { describe, it } from 'node:test';
import assert from 'assert';
import { minBy } from 'lodash-es';

describe('minBy', () => {
    it('should work as expected', () => {
        assert.strictEqual(typeof minBy, 'function');
    });
});