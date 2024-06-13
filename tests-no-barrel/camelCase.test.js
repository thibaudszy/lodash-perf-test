import { describe, it } from 'node:test';
import assert from 'assert';
import camelCase from 'lodash-es-with-subpaths/camelCase';

describe('camelCase', () => {
    it('should be of the expected type', () => {
        assert.strictEqual(typeof camelCase, 'function');
    });
});