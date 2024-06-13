import { describe, it } from 'node:test';
import assert from 'assert';
import { pull } from 'lodash-es';

describe('pull', () => {
    it('should be of the expected type', () => {
        assert.strictEqual(typeof pull, 'function');
    });
});