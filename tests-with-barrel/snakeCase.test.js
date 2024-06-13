import { describe, it } from 'node:test';
import assert from 'assert';
import { snakeCase } from 'lodash-es';

describe('snakeCase', () => {
    it('should be of the expected type', () => {
        assert.strictEqual(typeof snakeCase, 'function');
    });
});