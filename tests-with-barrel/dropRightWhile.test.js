import { describe, it } from 'node:test';
import assert from 'assert';
import { dropRightWhile } from 'lodash-es';

describe('dropRightWhile', () => {
    it('should be of the expected type', () => {
        assert.strictEqual(typeof dropRightWhile, 'function');
    });
});