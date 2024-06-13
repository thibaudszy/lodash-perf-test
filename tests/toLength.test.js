import { describe, it } from 'node:test';
import assert from 'assert';
import { toLength } from 'lodash-es';

describe('toLength', () => {
    it('should work as expected', () => {
        assert.strictEqual(typeof toLength, 'function');
    });
});