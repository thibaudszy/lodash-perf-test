import { describe, it } from 'node:test';
import assert from 'assert';
import { toLength } from 'lodash-es';

describe('toLength', () => {
    it('should be of the expected type', () => {
        assert.strictEqual(typeof toLength, 'function');
    });
});