import { describe, it } from 'node:test';
import assert from 'assert';
import { conformsTo } from 'lodash-es';

describe('conformsTo', () => {
    it('should work as expected', () => {
        assert.strictEqual(typeof conformsTo, 'function');
    });
});