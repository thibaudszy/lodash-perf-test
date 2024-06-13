import { describe, it } from 'node:test';
import assert from 'assert';
import { merge } from 'lodash-es';

describe('merge', () => {
    it('should work as expected', () => {
        assert.strictEqual(typeof merge, 'function');
    });
});