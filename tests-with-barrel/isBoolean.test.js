import { describe, it } from 'node:test';
import assert from 'assert';
import { isBoolean } from 'lodash-es';

describe('isBoolean', () => {
    it('should be of the expected type', () => {
        assert.strictEqual(typeof isBoolean, 'function');
    });
});