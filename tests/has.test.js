import { describe, it } from 'node:test';
import assert from 'assert';
import { has } from 'lodash-es';

describe('has', () => {
    it('should work as expected', () => {
        assert.strictEqual(typeof has, 'function');
    });
});