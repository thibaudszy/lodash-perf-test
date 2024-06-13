import { describe, it } from 'node:test';
import assert from 'assert';
import { takeRightWhile } from 'lodash-es';

describe('takeRightWhile', () => {
    it('should be of the expected type', () => {
        assert.strictEqual(typeof takeRightWhile, 'function');
    });
});