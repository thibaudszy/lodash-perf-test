import { describe, it } from 'node:test';
import assert from 'assert';
import { isObjectLike } from 'lodash-es';

describe('isObjectLike', () => {
    it('should be of the expected type', () => {
        assert.strictEqual(typeof isObjectLike, 'function');
    });
});