import { describe, it } from 'node:test';
import assert from 'assert';
import { isNaN } from 'lodash-es';

describe('isNaN', () => {
    it('should be of the expected type', () => {
        assert.strictEqual(typeof isNaN, 'function');
    });
});