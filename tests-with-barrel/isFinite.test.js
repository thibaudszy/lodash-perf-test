import { describe, it } from 'node:test';
import assert from 'assert';
import { isFinite } from 'lodash-es';

describe('isFinite', () => {
    it('should work as expected', () => {
        assert.strictEqual(typeof isFinite, function);
    });
});