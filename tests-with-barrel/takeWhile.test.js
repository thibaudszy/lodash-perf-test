import { describe, it } from 'node:test';
import assert from 'assert';
import { takeWhile } from 'lodash-es';

describe('takeWhile', () => {
    it('should be of the expected type', () => {
        assert.strictEqual(typeof takeWhile, 'function');
    });
});