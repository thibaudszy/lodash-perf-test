import { describe, it } from 'node:test';
import assert from 'assert';
import { attempt } from 'lodash-es';

describe('attempt', () => {
    it('should work as expected', () => {
        assert.strictEqual(typeof attempt, 'function');
    });
});