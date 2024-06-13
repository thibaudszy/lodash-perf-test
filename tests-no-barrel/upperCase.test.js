import { describe, it } from 'node:test';
import assert from 'assert';
import upperCase from 'lodash-es-with-subpaths/upperCase';

describe('upperCase', () => {
    it('should be of the expected type', () => {
        assert.strictEqual(typeof upperCase, 'function');
    });
});