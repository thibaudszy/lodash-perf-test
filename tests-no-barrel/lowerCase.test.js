import { describe, it } from 'node:test';
import assert from 'assert';
import lowerCase from 'lodash-es-with-subpaths/lowerCase';

describe('lowerCase', () => {
    it('should be of the expected type', () => {
        assert.strictEqual(typeof lowerCase, 'function');
    });
});