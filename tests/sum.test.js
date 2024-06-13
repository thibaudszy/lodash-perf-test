import { describe, it } from 'node:test';
import assert from 'assert';
import { sum } from 'lodash-es';

describe('sum', () => {
    it('should work as expected', () => {
        assert.strictEqual(typeof sum, 'function');
    });
});