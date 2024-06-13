import { describe, it } from 'node:test';
import assert from 'assert';
import { pull } from 'lodash-es';

describe('pull', () => {
    it('should work as expected', () => {
        assert.strictEqual(typeof pull, 'function');
    });
});