import { describe, it } from 'node:test';
import assert from 'assert';
import { cond } from 'lodash-es';

describe('cond', () => {
    it('should be of the expected type', () => {
        assert.strictEqual(typeof cond, 'function');
    });
});