import { describe, it } from 'node:test';
import assert from 'assert';
import snakeCase from 'lodash-es-with-subpaths/snakeCase';

describe('snakeCase', () => {
    it('should work as expected', () => {
        assert.strictEqual(typeof snakeCase, function);
    });
});