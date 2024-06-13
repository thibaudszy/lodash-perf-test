import { describe, it } from 'node:test';
import assert from 'assert';
import { split } from 'lodash-es';

describe('split', () => {
    it('should work as expected', () => {
        assert.strictEqual(typeof split, 'function');
    });
});