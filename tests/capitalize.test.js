import { describe, it } from 'node:test';
import assert from 'assert';
import { capitalize } from 'lodash-es';

describe('capitalize', () => {
    it('should work as expected', () => {
        assert.strictEqual(typeof capitalize, 'function');
    });
});