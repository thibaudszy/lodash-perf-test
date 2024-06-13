import { describe, it } from 'node:test';
import assert from 'assert';
import dropRightWhile from 'lodash-es-with-subpaths/dropRightWhile';

describe('dropRightWhile', () => {
    it('should be of the expected type', () => {
        assert.strictEqual(typeof dropRightWhile, 'function');
    });
});