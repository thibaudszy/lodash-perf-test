import { describe, it } from 'node:test';
import assert from 'assert';
import dropWhile from 'lodash-es-with-subpaths/dropWhile';

describe('dropWhile', () => {
    it('should be of the expected type', () => {
        assert.strictEqual(typeof dropWhile, 'function');
    });
});