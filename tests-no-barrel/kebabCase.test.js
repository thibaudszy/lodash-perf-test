import { describe, it } from 'node:test';
import assert from 'assert';
import kebabCase from 'lodash-es-with-subpaths/kebabCase';

describe('kebabCase', () => {
    it('should be of the expected type', () => {
        assert.strictEqual(typeof kebabCase, 'function');
    });
});