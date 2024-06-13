import { describe, it } from 'node:test';
import assert from 'assert';
import lowerCase from 'lodash-es-with-subpaths/lowerCase';

describe('lowerCase', () => {
    it('should work as expected', () => {
        assert.strictEqual(typeof lowerCase, function);
    });
});