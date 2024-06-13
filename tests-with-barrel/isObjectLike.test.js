import { describe, it } from 'node:test';
import assert from 'assert';
import { isObjectLike } from 'lodash-es';

describe('isObjectLike', () => {
    it('should work as expected', () => {
        assert.strictEqual(typeof isObjectLike, function);
    });
});