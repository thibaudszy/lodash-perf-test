import { describe, it } from 'node:test';
import assert from 'assert';
import { isBoolean } from 'lodash-es';

describe('isBoolean', () => {
    it('should work as expected', () => {
        assert.strictEqual(typeof isBoolean, function);
    });
});